import React, { useEffect } from "react";
import Products from "../components/Products/Products";
import { useContext } from "react";
import ShopContext from "../context/ShopContext";
import Hero from "../components/Hero/Hreo";

// Search page
const Search = () => {
  const { search, data, setProductsList } = useContext(ShopContext);
  useEffect(() => {
    const prodcrt = data.alcohol;
    const cocktail = data.cocktailBook;
    const list = [...prodcrt, ...cocktail];
    const regex = `/${search}/gi`;
    console.log("regex", regex);
    console.log("search atribut ", search);
    console.log("list", list);
    let arr = list.filter((item) => {
      return item.title.toLowerCase().includes(search.toLowerCase());
    });
    console.log(list.filter((asd) => asd.title.toLowerCase().includes(search)));
    console.log("arr from Search", arr);
    setProductsList(arr);
  }, [search]);
  return (
    <div>
      <Hero title={`Search results for  ${search}`} sort={true} />
      <Products chack={true} />
    </div>
  );
};
export default Search;
