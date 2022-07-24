import "./Cocktail.css";
import { FaCocktail } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cocktail = ({ props }) => {
  return (
    <div className="cocktail">
      <Link to={`/cocktail/${props.id}`}>
        <div className="cocktail-img">
          <img src={props.image} alt="cocktail" />
        </div>
        <div className="cocktail-info">
          <h3>{props.title}</h3>
          <h4>{props.strCategory}</h4>
          <h4>{props.strInstructions}</h4>
          <span>
            <FaCocktail />
            <FaCocktail />
            <FaCocktail />
          </span>
        </div>
      </Link>
    </div>
  );
};
export default Cocktail;
