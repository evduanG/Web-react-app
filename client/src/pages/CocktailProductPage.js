import React from "react";
import { useParams } from "react-router-dom";
import ShopContext from "../context/ShopContext";
import { useContext } from "react";
import CocktailProductPageComp from "../components/CocktailProductPageComp/CocktailProductPageComp";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

const CocktailProductPage = () => {
  const { cocktailBook } = useContext(ShopContext);

  const { id } = useParams();
  const drink = cocktailBook.find((drink) => {
    return drink.id === id;
  });

  return (
    <div>
      <Breadcrumbs />
      <CocktailProductPageComp drink={drink} />
    </div>
  );
};
export default CocktailProductPage;
