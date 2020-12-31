import React from "react";
import { useHistory } from "react-router-dom";
import NumberFormat from 'react-number-format';
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
        <div>
          <NumberFormat
            value={item.price}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
            renderText={value => <div>{value}</div>}
          />
        </div>
        <div className="score">
          <ScoreAvg itemId={item.id} />
        </div>
      </div>
    </div>
  );
}

export default Item;
