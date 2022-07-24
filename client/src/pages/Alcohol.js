import React from "react";
import Hero from "../components/Hero/Hreo";
import { useState } from "react";
import Products from "../components/Products/Products";
import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import ShopContext from "../context/ShopContext";
import { useContext, useEffect } from "react";

const Alcohol = ({ alcoholCatgury }) => {
  const { switchCategory } = useContext(ShopContext);
  useEffect(() => {
    switchCategory("alcohol", alcoholCatgury);
    console.log("alcohol");
  }, [alcoholCatgury]);

  return (
    <div>
      <Hero title={alcoholCatgury} sort={true} />
      <Products />
    </div>
  );
};
export default Alcohol;
