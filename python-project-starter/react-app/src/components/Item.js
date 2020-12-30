import React from "react";
import AddToCart from "./AddToCart";

function Item({ item }) {
  return (
    <div>
      <div>
        <img src={item.imgurl}></img>
      </div>
      <div>
        {item.name}
        {item.price}
        <AddToCart />
      </div>
    </div>
  );
}

export default Item;
