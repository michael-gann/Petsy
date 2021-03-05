import React from "react";

function RemoveItemFromCart({ id, item, setCartItems, localItemsCart, setLocalItemsCart }) {
  let itemToRemove = item.id;

  const removeItem = (e) => {
    let cartCopy = [...localItemsCart];

    let newCartCopy = cartCopy.filter((cartItem) => {
      for (const key in cartItem) {
        if (key !== itemToRemove.toString()) {
          return cartItem;
        }
      }
    });

    cartCopy = [...newCartCopy];
    setLocalItemsCart([...newCartCopy]);

    let cartString = JSON.stringify(newCartCopy);
    localStorage.setItem("cart", cartString);

    async function fetchData() {
      let fetchedItems = [];

      if (newCartCopy.length < 1) {
        setCartItems([]);
      };

      newCartCopy.map(async (cartItem) => {
        const response = await fetch(`/api/items/${Object.keys(cartItem)}`);
        const itemData = await response.json();
        fetchedItems.push(itemData);
        setCartItems([...fetchedItems]);
      });
    }
    fetchData();
  };

  return (
    <>
      <button className="removeFromCartBtn" onClick={removeItem}>
        <div className="removeFromCartBtn-div">Remove Item</div>
      </button>
    </>
  );
}

export default RemoveItemFromCart;
