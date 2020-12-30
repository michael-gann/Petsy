import React, { useEffect, useState } from "react";
import Item from "./Item"

function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/items");
      const itemData = await response.json();
      setItems(itemData)
    }
    fetchData();
  }, []);

  const itemComponents = items.map((item) => {
    return (
      <div key={item.id}>
        <Item item={item} />
      </div>
    );
  });

  return (
    <>
      <h1>Items: </h1>
      <ul>{itemComponents}</ul>
    </>
  );
}

export default Items;
