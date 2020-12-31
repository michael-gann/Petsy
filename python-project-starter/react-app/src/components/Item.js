import React from "react";
import { useHistory } from "react-router-dom";
import ScoreAvg from "./Reviews/ScoreAvg"

function Item({ item }) {
  const history = useHistory();

  const handleClick = () => {
    return history.push(`/items/${item.id}`);
  };

  return (
    <div className="item-container">
      <div className="image-container" onClick={handleClick}>
        <img src={item.imgurl}></img>
      </div>
      <div className="item-details">
        {item.name}
        {item.price}
        <ScoreAvg itemId={item.id} />
      </div>
    </div>
  );
}

export default Item;
