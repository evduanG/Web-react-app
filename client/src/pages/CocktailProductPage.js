import { useParams, useMatch } from "react-router-dom";
import ShopContext from "../context/ShopContext";
import { useContext } from "react";
import CocktailProductPageComp from "../components/CocktailProductPageComp/CocktailProductPageComp";

const CocktailProductPage = () => {
  const { data, cocktailBook } = useContext(ShopContext);
  const { id } = useParams();
  const drink = cocktailBook.find((drink) => {
    return drink.id === id;
  });

  return <CocktailProductPageComp drink={drink} />;
};
export default CocktailProductPage;
