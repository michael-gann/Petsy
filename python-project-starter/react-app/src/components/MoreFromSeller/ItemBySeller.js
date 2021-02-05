import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../Item";
import Carousel from "react-elastic-carousel";
import AutoSizer from "react-virtualized-auto-sizer";
// import "react-virtualized-auto-sizer/styles.css"; // only needs to be imported once

const ItemBySeller = ({ user, sellerId }) => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  const handleClick = (e) => {
    return <Redirect to={`/items/${id}`} />;
  };

  console.log(sellerId);

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
      <Carousel itemsToShow={1}>
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
