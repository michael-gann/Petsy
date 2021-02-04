import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import NumberFormat from "react-number-format";
import ScoreAvg from "./Reviews/ScoreAvg";
import AddToCart from "./ShoppingCart/AddToCart";

function Item({ item }) {
  const history = useHistory();
  const user = localStorage.getItem("user");

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.className === "addToCartBtn") return history.push("/cart");
    return history.push(`/items/${item.id}`);
  };

  return (
    <div className="item-container">
      <div className="image-container" onClick={handleClick}>
        <img src={item.imgurl}></img>
      </div>
      <div className="item-details" onClick={handleClick}>
        <div className="item-name">{item.name}</div>
        <div>
          <div className="item-inner-price">
            <NumberFormat
              value={item.price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
              renderText={(value) => <div>{value}</div>}
              decimalScale={2}
              fixedDecimalScale={true}
            />
          </div>
        </div>
        <div className="score-add-cart">
          <div className="score">
            <ScoreAvg itemId={item.id} />
          </div>
          {user ? (
            <div className="add-item-cart-btn">
              <AddToCart item={item} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Item;
