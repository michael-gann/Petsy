import React from 'react'
import PaymentMethodsCard from './images/PaymentMethodsCard.jpg';
import PaymentMethodsPaypal from './images/PaymentMethodsPaypal.jpg';
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "480px",
    width: "384px",
    borderRadius: "20px",
  },
};

Modal.setAppElement("#root");

function ProceedToCheckout(total) {

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
    )
  }

  return (
    <div className="proceed-to-checkout">
      <div>
        <h4>How you'll pay</h4>
        {paymentMethod()}
        <div className="totals">
          <p>
            Item(s) total:
          </p>
          <p>
            Total:
          </p>
        </div>
      </div>
      <button>
        Proceed To Checkout
      </button>
    </div>
  )
}

export default ProceedToCheckout
