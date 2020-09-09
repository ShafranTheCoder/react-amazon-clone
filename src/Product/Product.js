import React from "react";
import "./Product.scss";
import { useStateValue } from "../StateProvider";

function Product({ product, product: { id, title, image, price, rating } }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = (product) => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: product,
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>
                <span role="img" aria-label="star">
                  ⭐
                </span>
              </p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={() => addToBasket(product)}>add to basket</button>
    </div>
  );
}

export default Product;
