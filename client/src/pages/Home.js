import Products from "../components/Products/Products";
import React from "react";
import Hero from "../components/Hero/Hreo";
import ShopContext from "../context/ShopContext";
import { useContext } from "react";

function Home() {
  const { sortProducts } = useContext(ShopContext);
  return (
    <div>
      <Hero
        title={"Home"}
        sortProducts={sortProducts}
        sort={true}
        key="HeroHome"
      />
      <Products key={"HomeProducts"} />
    </div>
  );
}

export default Home;
