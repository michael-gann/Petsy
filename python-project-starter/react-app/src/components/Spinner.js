import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import { Circle } from "better-react-spinkit";

export const Spinner = (props) => {
  const { promiseInProgress } = usePromiseTracker({
    area: props.area,
    delay: 0,
  });

  console.log("PROMISE IN PROGRESS VALUE FROM SPINNER", promiseInProgress);

  return (
    <>
      {promiseInProgress && (
        <div className="spinner">
          <Circle size={100} />
        </div>
      )}
    </>
  );
};

export default Spinner;