import Hero from "../components/Hero/Hreo";
import { AiFillDelete } from "react-icons/ai";
import "./Cart.css";
import { useContext } from "react";
import ShopContext from "../context/ShopContext";

const Cart = () => {
  const { cart, changeQuantity, removeFromCart, setCart } =
    useContext(ShopContext);

  return (
    <div>
      <Hero title="Cart" sort={false} />
      <div className="Cart-container">
        {cart.map((item) => {
          return (
            <div className="content" key={item.prodct.id}>
              <div className="prodct-img">
                <img src={item.prodct.image} alt="alcohol" />
              </div>

              <div className="prodct-txt">
                <div>
                  <h1>{item.prodct.title}</h1>
                  <p>{item.prodct.description}</p>
                  <h2>{item.prodct.price}</h2>
                </div>
              </div>
              <div className="product-button">
                <button
                  className="product-button"
                  value={item.prodct.id}
                  onClick={(e) => {
                    removeFromCart(e.currentTarget.value);
                  }}
                >
                  <AiFillDelete />
                </button>
                <button
                  className="product-button"
                  value={item.prodct.id}
                  onClick={(e) => {
                    changeQuantity(e.currentTarget.value, item.quantity + 1);
                  }}
                >
                  +
                </button>
                <h2>{item.quantity}</h2>
                <button
                  className="product-button"
                  value={item.prodct.id}
                  onClick={(e) => {
                    if (item.quantity > 1) {
                      changeQuantity(e.currentTarget.value, item.quantity - 1);
                    } else {
                      removeFromCart(e.currentTarget.value);
                    }
                  }}
                >
                  -
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cart-button">
        <button
          className="product-button"
          onClick={() => {
            setCart([]);
          }}
        >
          Clear Cart
        </button>
        <button
          className="product-button"
          onClick={() => {
            alert("Sorry but the site is still not active");
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};
export default Cart;
