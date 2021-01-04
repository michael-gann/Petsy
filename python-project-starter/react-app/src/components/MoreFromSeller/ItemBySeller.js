import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../Item";
import HorizontalScroll from "react-scroll-horizontal";
import Carousel from "react-material-ui-carousel";

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

  const child = { width: `300em`, height: `100%` };
  const parent = { height: `100%` };

  return (
    <>
      <h3>More from this seller: </h3>
      {items.length > 3 ? (
        <div style={parent} className="items-scroll">
          <HorizontalScroll reverseScroll={true}>
            {items.map((item) => {
              return (
                <div className="more-items" key={item.id}>
                  <Item item={item} style={child} onClick={handleClick}></Item>
                </div>
              );
            })}
          </HorizontalScroll>
        </div>
      ) : (
        <div className="more-by-sellers">
          <Carousel autoPlay={false}>
            {items.map((item, index) => (
              <Item item={item} key={index}></Item>
            ))}
          </Carousel>
        </div>
      )}
    </>
  );
};

export default ItemBySeller;
