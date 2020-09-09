import React from "react";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";
import "./Checkout.scss";

const Checkout = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        {basket?.length === 0 ? (
          <h2 className="checkout__title">Basket is empty !!!</h2>
        ) : (
          <>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {basket.map((item, index) => (
              <CheckoutProduct key={index} product={item} />
            ))}
          </>
        )}
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
