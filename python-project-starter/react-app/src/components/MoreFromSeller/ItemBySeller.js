import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HorizontalScroll from "react-scroll-horizontal";
import Item from "../Item";

const ItemBySeller = ({ user, sellerId }) => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  console.log("ITEM IN SELLER COMPONENT", item);

  useEffect(() => {
    const getItems = async () => {
      const res = await fetch(`/api/users/${sellerId}/items/${id}`);
      const json = await res.json();
      setItem(json);
    };
    getItems();
  }, [id, sellerId]);

  const child = { width: `100%`, height: `100%` };
  const parent = { height: `100%` };

  return (
    <div className="seller">
      <h3>More from this seller:</h3>
      <div style={parent} className="item-scroll">
        <HorizontalScroll reverseScroll={true}>
          {item.map((item) => {
            return (
              <div key={item.id} className="more-items">
                <Item item={item} style={child}></Item>;
              </div>
            );
          })}
        </HorizontalScroll>
      </div>
    </div>
  );
};

export default ItemBySeller;
