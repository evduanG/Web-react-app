import Hero from "../components/Hero/Hreo";
import { useEffect, useState } from "react";
import Products from "../components/Products/Products";
import { Link, Outlet } from "react-router-dom";
import { useParams, useMatch } from "react-router-dom";
import ShopContext from "../context/ShopContext";
import { useContext } from "react";
import SingleProduct from "../components/SingleProduct/SingleProduct";

const SingleProductPage = () => {
  const { id } = useParams();
  const { data } = useContext(ShopContext);

  const product = data.alcohol.find((item) => {
    return item.id === Number(id);
  });

  return <SingleProduct product={product} />;
};
export default SingleProductPage;
