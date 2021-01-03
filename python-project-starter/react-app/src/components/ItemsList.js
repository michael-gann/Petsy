import React, { useEffect, useState } from "react";
import Item from "./Item";
import { areas } from "../common/areas";
import { trackPromise } from "react-promise-tracker";
import Spinner from "./Spinner";

import "./itemPage.css";

function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // 3 second delay fetch for testing
    // const fetchWithDelay = () => {
    //   const promise = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve(
    //         fetch("/api/items", {
    //           method: "GET",
    //         }).then((response) => response.json())
    //       );
    //     }, 3000);
    //   });
    //   return promise;
    // };

    // const fetchItems = () => fetchWithDelay();
    async function fetchData() {
      const response = await fetch("/api/items");
      const itemData = await response.json();
      setItems(itemData);
    }
    trackPromise(fetchData(), areas.item);
  }, []);

  const itemComponents = items.map((item) => {
    return (
      <div key={item.id}>
        <Item item={item} />
      </div>
    );
  });

  return (
    <div className="item-page-container">
      <div className="header-text">
        <h1>ITEMS </h1>
      </div>
      <Spinner area={areas.item} />
      <div className="item-components">{itemComponents}</div>
    </div>
  );
}

export default Items;
