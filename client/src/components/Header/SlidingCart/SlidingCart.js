import "./SlidingCart.css";
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiFillDelete } from "react-icons/ai";
import { useContext } from "react";
import ShopContext from "../../../context/ShopContext";

/**
 *
 */
const SlidingCart = () => {
  const { cart, changeQuantity, removeFromCart } = useContext(ShopContext);
  const totalPrice = cart.reduce((total, item) => {
    return total + item.prodct.price * item.quantity;
  }, 0);
  let i = 0;
  return (
    <div className="sliding-card">
      <div className="sliding">
        <AiOutlineShoppingCart />
        <div className="sliding-content">
          <h2>Your Cart</h2>
          <div className="sliding-content-products">
            {cart.map((item) => {
              i++;
              if (i > 3) {
                return null;
              }
              return (
                <div
                  className="sliding-content-card-sliding"
                  key={item.prodct.id}
                >
                  <div className="sliding-content-product-image">
                    <img src={item.prodct.image} alt="alcohol" />
                  </div>

                  <div className="sliding-content-product-con">
                    <div>
                      {}
                      <p>
                        {item.prodct.title.length > 15
                          ? item.prodct.title.slice(0, 15)
                          : item.prodct.title}
                      </p>
                    </div>
                    <div className="sliding-content-product-info">
                      <button
                        className="product-button delete-button"
                        value={item.prodct.id}
                        onClick={function (e) {
                          removeFromCart(e.currentTarget.value);
                        }}
                      >
                        <AiFillDelete />
                      </button>
                      <button
                        className="product-button"
                        value={item.prodct.id}
                        onClick={(e) => {
                          changeQuantity(
                            e.currentTarget.value,
                            item.quantity + 1
                          );
                        }}
                      >
                        +
                      </button>
                      <p>
                        <strong>{item.quantity}</strong>
                      </p>
                      <button
                        className="product-button"
                        value={item.prodct.id}
                        onClick={(e) => {
                          if (item.quantity > 1) {
                            changeQuantity(
                              e.currentTarget.value,
                              item.quantity - 1
                            );
                          } else {
                            removeFromCart(e.currentTarget.value);
                          }
                        }}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            {i > 3 ? (
              <div>
                <h3>to view the rest of the products </h3>
              </div>
            ) : null}
          </div>
          <Link to="/cart">
            <button className="product-button">
              <span>Checkout</span>
            </button>
          </Link>
          <div className="totle">
            <h3>Total : {totalPrice.toFixed(2)} $</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SlidingCart;
