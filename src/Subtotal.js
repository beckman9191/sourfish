import React from 'react'
import CurrencyFormat from 'react-currency-format';
import "./Subtotal.css"
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {
  const[{ basket }, dispatch] = useStateValue();


  return (
    <div class="subtotal">
      <CurrencyFormat 
      renderText={(value) => (
        <>
        <p>
            {/* part of the homework */}
            Subtotal ({basket.length} items): <strong>{value}</strong>
        </p>

        <small calssName="subtotal__gift">
            <input type="checkbox" /> This order contains a gift
        </small>
        </>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)} // part of the homework
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal

