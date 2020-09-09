import React from "react";
import { useStateValue } from "../StateProvider";
import "./CheckoutProduct.scss";

const CheckoutProduct = ({ product: { id, title, image, price, rating } }) => {
  const [{}, action] = useStateValue();

  const removeFromBasket = (id) => {
    action({
      type: "REMOVE_FROM_BASKET",
      payload: id,
    });
  };

  return (
    <div className="checkout-product">
      <img src={image} alt="" />

      <div className="checkout-product__info">
        <p className="checkout-product__title">{title}</p>
        <p className="checkout-product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout-product__rating">
          {Array(rating)
            .fill()
            .map((item, index) => (
              <p key={index}>
                <span role="img" aria-label="star">
                  ⭐
                </span>
              </p>
            ))}
        </div>
        <button onClick={() => removeFromBasket(id)}>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
