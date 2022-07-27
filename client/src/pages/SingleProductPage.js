import React from "react";
import { useParams } from "react-router-dom";
import ShopContext from "../context/ShopContext";
import { useContext } from "react";
import SingleProduct from "../components/SingleProduct/SingleProduct";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

const SingleProductPage = () => {
  const { id } = useParams();
  console.log("id", id);

  const { data } = useContext(ShopContext);

  const product = data.alcohol.find((item) => {
    return item.id === Number(id);
  });

  return (
    <div>
      <Breadcrumbs />
      <SingleProduct product={product} />;
    </div>
  );
};
export default SingleProductPage;
