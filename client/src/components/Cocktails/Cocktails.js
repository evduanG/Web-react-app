import "./Cocktails.css";
import Cocktail from "./Cocktail/Cocktail";
import { useContext } from "react";
import ShopContext from "../../context/ShopContext";
/**
 *
 */
const Cocktails = ({ cocktails }) => {
  const {} = useContext(ShopContext);
  return (
    <div className="cocktails">
      {cocktails.map((item) => {
        return <Cocktail props={item} />;
      })}
    </div>
  );
};
export default Cocktails;
