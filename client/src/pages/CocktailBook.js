import Products from "../components/Products/Products";
import Hero from "../components/Hero/Hreo";
import ShopContext from "../context/ShopContext";
import { useContext, useEffect, useState } from "react";

const CocktailBook = () => {
  //  const { data, cocktailBook  , setProductsList,} = useContext(DataContext);
  //setPageNumber setLoading,
  const { cocktailBook, setProductsList } = useContext(ShopContext);
  const [cocktailBookList, setCocktailBookList] = useState([cocktailBook]);

  useEffect(() => {
    setProductsList(...cocktailBookList);
  }, []);

  return (
    <div>
      <Hero title="Cocktail book" sort={false} />
      <Products />
    </div>
  );
};
export default CocktailBook;
