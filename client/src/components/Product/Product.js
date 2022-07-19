import "./Product.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ShopContext from "../../context/ShopContext";

function Product({ id, price, title, image, caytegory }) {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="product-card" key={`Product"$title`}>
      <Link to={`/${caytegory}/${id}`}>
        <div className="product-image">
          <img src={image} alt={title} />
        </div>
      </Link>
      <div className="product-info">
        <h3>{title}</h3>
        <h3>{price} $ </h3>
      </div>
      <button
        className="product-button"
        value={id}
        onClick={(e) => {
          console.log("onClick", title);
          addToCart(e.target.value);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}
export default Product;
