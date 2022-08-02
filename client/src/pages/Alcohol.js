import React from "react";
import Hero from "../components/Hero/Hreo";
import Products from "../components/Products/Products";
import ShopContext from "../context/ShopContext";
import { useContext, useEffect } from "react";

const Alcohol = ({ alcoholCatgury }) => {
  const { switchCategory } = useContext(ShopContext);
  useEffect(() => {
    switchCategory("alcohol", alcoholCatgury);
  }, [alcoholCatgury]);

  return (
    <div>
      <Hero title={alcoholCatgury} sort={true} />
      <Products />
    </div>
  );
};
export default Alcohol;
