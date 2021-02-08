import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../Item";
import Carousel from "react-elastic-carousel";

const ItemBySeller = ({ user, sellerId }) => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  const handleClick = (e) => {
    return <Redirect to={`/items/${id}`} />;
  };

  useEffect(() => {
    const getItems = async () => {
      const res = await fetch(`/api/users/${sellerId}/items/${id}`);
      const json = await res.json();
      setItems(json);
    };
    getItems();
  }, [id, sellerId]);

  return (
    <>
      <h3>More from this seller: </h3>
      <Carousel itemsToShow={3}>
        {items.map((item) => {
          return (
            <div className="more-items" key={item.id}>
              <Item item={item} onClick={handleClick}></Item>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default ItemBySeller;
