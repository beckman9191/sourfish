import React from 'react'
import "./Checkout.css";
import Subtotal from './Subtotal';


function Checkout() {
  return (
    <div className="checkout">
      <div calssName="checkout__left">
        <img 
        className='checkout__ad'
        src="https://picsum.photos/1000/800"
        alt=""
        />

        <div>
            <h2 className="checkout__title">
                Your shopping Basket
            </h2>

            {/* CheckoutProduct */}
            {/* CheckoutProduct */}
            {/* CheckoutProduct */}
            {/* CheckoutProduct */}
            {/* CheckoutProduct */}
        </div>
      </div>
      
      <div className="checkout__right">
        <Subtotal />
        
      </div>
    </div>
  )
}

export default Checkout
