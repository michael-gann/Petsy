import React from "react";
import { useHistory } from "react-router-dom";
import NumberFormat from "react-number-format";
import ScoreAvg from "./Reviews/ScoreAvg";
import { areas } from "../common/areas";
// import { Circle } from "better-react-spinkit";
import Spinner from "./Spinner";

function Item({ item }) {
  const history = useHistory();
  // console.log("PROMISE FROM ITEM COMPONENT", promiseInProgress);

  const handleClick = () => {
    return history.push(`/items/${item.id}`);
  };

  return (
    <>
      <div className="item-container">
        <div className="image-container" onClick={handleClick}>
          <img src={item.imgurl}></img>
        </div>
        <div className="item-details">
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
          <div className="score">
            <ScoreAvg itemId={item.id} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
