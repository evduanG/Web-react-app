import React from "react";
import "./SingleProduct.css";
import { useContext } from "react";
import ShopContext from "../../context/ShopContext";

const SingleProduct = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="container">
      <div className="image">
        <img className="image" src={product.image} alt="product" />
      </div>
      <div className="product-details">
        <h1>{product.title}</h1>
        <h2>{product.price} $</h2>
        <h2>Alcohol Percent {product.Percent} %</h2>
        <button
          className="product-button"
          value={product.id}
          onClick={(e) => {
            try {
              console.log(e.currentTarget.value);
              addToCart(e.currentTarget.value);
            } catch (error) {
              console.log(error);
            }
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
