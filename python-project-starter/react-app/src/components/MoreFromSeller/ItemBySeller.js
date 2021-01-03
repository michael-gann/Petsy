import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HorizontalScroll from "react-scroll-horizontal";
import Item from "../Item";

const ItemBySeller = ({ user, sellerId }) => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  const handleClick = (e) => {
    // history.push(`/pets/${id}`)
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
      <h3>More from this seller:</h3>
      <div style={parent} className="item-scroll">
        <HorizontalScroll reverseScroll={true}>
          {items.map((item) => {
            return (
              <div key={item.id} className="more-items">
                <Item item={item}
                  style={child}
                  onClick={handleClick}
                ></Item>
              </div>
            );
          })}
        </HorizontalScroll>
      </div>
    </>
  );
};

export default ItemBySeller;
