import React from 'react'
import PaymentMethodsCard from './images/PaymentMethodsCard.jpg';
import PaymentMethodsPaypal from './images/PaymentMethodsPaypal.jpg';

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
