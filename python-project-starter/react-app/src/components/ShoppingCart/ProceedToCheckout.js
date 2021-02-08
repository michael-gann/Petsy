import React, { useState } from "react";
import PaymentMethodsCard from "./images/PaymentMethodsCard.jpg";
import PaymentMethodsPaypal from "./images/PaymentMethodsPaypal.jpg";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";
import RemovePetFromCart from "./RemovePetFromCart";
import NumberFormat from "react-number-format";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "75%",
    width: "70vw",
    borderRadius: "20px",
  },
  overlay: { zIndex: 1000 },
};

Modal.setAppElement("#root");

function ProceedToCheckout({
  total,
  cartItems,
  petsCart,
  itemCarObj,
  setNumCartItems,
}) {
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();
  const user = localStorage.getItem("user");

  //* Modal Functions
  function openModal() {
    setShowModal(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setShowModal(false);
    window.localStorage.clear();
    localStorage.setItem("user", user);
    setNumCartItems(0);
    return history.push("/");
  }

  const paymentMethod = () => {
    return (
      <div className="payment-methods">
        <label className="payments">
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
          <img src={PaymentMethodsCard} />
        </label>
        <label className="payments">
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
          <img src={PaymentMethodsPaypal} className="payment" />
        </label>
      </div>
    );
  };

  return (
    <div className="proceed-to-checkout">
      <div>
        <h4>How you'll pay</h4>
        {paymentMethod()}
        <div className="totals">
          <div className="items-total">
            <p>
              Item(s) total:{" "}
              {
                <NumberFormat
                  value={total}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  renderText={(value) => <div>{value}</div>}
                  decimalScale={2}
                  fixedDecimalScale={true}
                />
              }
            </p>
          </div>
          <div className="shipping">
            <p>Shipping:</p>
          </div>
          <p>
            Total:{" "}
            {
              <NumberFormat
                value={total}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                renderText={(value) => <div>{value}</div>}
                decimalScale={2}
                fixedDecimalScale={true}
              />
            }
          </p>
        </div>
      </div>
      <button onClick={openModal}>Proceed To Checkout</button>
      <Modal
        closeTimeoutMS={500}
        isOpen={showModal}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Order Placed Modal"
      >
        <div className="cart-checkout-h1">
          <h1 className="cart-checkout-h1">Your Order is on the way!</h1>
        </div>
        <div className="cart-items-container">
          <ul>
            {petsCart &&
              petsCart.map((pets) => (
                <div className="cart-items-container__item" key={pets.id}>
                  <img className="cart-item-image" src={pets.imgurl} />
                  <div className="cart-item-info-container">
                    <h1>{pets.name}</h1>
                    <p>{pets.description}</p>
                  </div>
                  <NumberFormat
                    value={pets.price}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                    renderText={(value) => <div>{value}</div>}
                    decimalScale={2}
                    fixedDecimalScale={true}
                  />
                </div>
              ))}
          </ul>
        </div>
        <ul className="cart-items-container">
          {cartItems.map((item) => (
            <div className="cart-items-container__item" key={item.id}>
              <img className="cart-item-image" src={item.imgurl} />
              <div className="cart-item-info-container">
                <div className="navlink">
                  <h1>{item.name}</h1>
                </div>
              </div>
              <div className="cart-quant-price">
                <div>{`(${itemCarObj[item.id]})`}</div>
                <h3>
                  <NumberFormat
                    value={item.price * itemCarObj[item.id]}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                    renderText={(value) => <div>{value}</div>}
                    decimalScale={2}
                    fixedDecimalScale={true}
                  />
                </h3>
              </div>
            </div>
          ))}
        </ul>
        <div className="cart-checkout">
          <button onClick={closeModal} className="removeFromCartBtn">
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default ProceedToCheckout;
