import React from "react";
import { useStateValue } from "../StateProvider";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.scss";

const Subtotal = () => {
  const [{ basket }] = useStateValue();
  const getBasketTotal = (basketArray) =>
    basketArray.reduce((prev, cur) => prev + cur.price, 0);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{` ${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        demicalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
