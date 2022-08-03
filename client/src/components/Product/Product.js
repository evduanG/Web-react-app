import "./Product.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

function Product({ id, price, title, image, caytegory, subcategory }) {
  const { addToCart } = useContext(CartContext);
  const isCocktail = () => {
    return caytegory === "Cocktail";
  };
  const configPath = () => {
    if (isCocktail()) {
      return `/${caytegory}/${id}`;
    } else {
      return `/${caytegory}/${subcategory}/${id}`;
    }
  };

  return (
    <div className="product-card" key={`product-car_${id}`}>
      <Link to={configPath()} key={`product-car_${id}_link_Pagcom`}>
        <div className="product-image" key={`product-car_${id}_product-image`}>
          <img src={image} alt={title} />
        </div>
      </Link>
      {!isCocktail() ? (
        <div className="product-info" key={`product-car_${id}_${title}_info`}>
          <h3 key={`product-car_${id}_title`}>{title}</h3>
          <h3 key={`product-car_${id}_price`}>{price} $ </h3>
          <button
            key={`product-card_${id}_${title}_button_AddTo`}
            className="product-button"
            value={id}
            onClick={(e) => {
              addToCart(e.target.value);
            }}
          >
            Add to cart
          </button>
        </div>
      ) : (
        <div className="product-info" key={`product-car_${id}_${title}_info`}>
          <h3 key={`product-car_${id}_title`}>{title}</h3>
        </div>
      )}
    </div>
  );
}
export default Product;
