import React from "react";

function AddToCart({ item, pet }) {
  async function addCartFunc(id, quantity, price) {
    try {
      const response = await fetch("http://localhost:3000/cart", {
        method: "POST",
        body: JSON.stringify({
          productId: id,
          quantity: quantity,
          price: price,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      let data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <button
      className="addToCartBtn"
      onclick={(e) => addCartFunc(item.id, pet.id, 1, item.price)}
    >
      Add To Basket
    </button>
  );
}

export default AddToCart;
