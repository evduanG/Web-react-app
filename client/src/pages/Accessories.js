import Hero from "../components/Hero/Hreo";
import Products from "../components/Products/Products";
import ShopContext from "../context/ShopContext";
import { useContext, useEffect } from "react";

// pageing

const Accessories = () => {
  const { switchCategory } = useContext(ShopContext);
  useEffect(() => {
    switchCategory("accessories");
  }, []);

  return (
    <div>
      <Hero title={"Accessories"} sort={true} />
      <div className="container">
        <Products key="Accessories_Products" />
      </div>
    </div>
  );
};
export default Accessories;
