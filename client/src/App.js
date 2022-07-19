import { Link, Route, Routes } from "react-router-dom";
import React, { useCallback, useState, useEffect, useMemo } from "react";
// path: liquor-store\src\App.js
// pageing
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Accessories from "./pages/Accessories";
import Alcohol from "./pages/Alcohol";
import CocktailBook from "./pages/CocktailBook";
import NoMatch from "./pages/NoMatch";
import AlcoholCatgury from "./pages/AlcoholCatgury";
import CocktailProductPage from "./pages/CocktailProductPage";
// compmonents
import Header from "./components/Header/Header";
import AlcoholCatgurys from "./components/AlcoholCatgury/AlcoholCatgurys";
import SingleProductPage from "./pages/SingleProductPage";

import ShopContext from "./context/ShopContext";
import Search from "./pages/Search";
import Login_Registe from "./components/Login_Registe/Login_Registe";
import { useRef } from "react";
import FakeAdvertisement from "./components/FakeAdvertisement/FakeAdvertisement";
import UserNoLogin from "./pages/UserNoLogin";
//img import

function App() {
  /*=============================================================
  ==data====data====data====data====data====data====data====data==
  ==============================================================*/
  const [data, setData] = useState(); // data for all products will not be changed after the first time
  const [productsList, setProductsList] = useState([]); // Will contain all the products that can be displayed by the filter
  const [pageNumber, setPageNumber] = useState(0); //
  const [showProducts, setShowProducts] = useState([]); // Will contain the products that are displayed on the current page (productsList) maximun of 20 products

  const [cocktailBook, setCocktailBook] = useState([]); // Will contain all the cocktails that can be displayed by the filter

  const [loading, setLoading] = useState(false); // Will be true when the data is loading from the server
  const [categorySelect, setCategorySelect] = useState("All-Categories");
  const [url, setUrl] = useState("http://localhost:5000/api");

  // 1st time the data is loaded from the server
  useEffect(() => {
    const fetchProducts_1st = async () => {
      setLoading(true);
      fetch(url)
        .then((res) => res.json())
        .then((dataR) => {
          setData(dataR);
          setProductsList(dataR.alcohol);
          setCocktailBook(dataR.cocktailBook);
          setShowProducts(dataR.alcohol.slice(0, 19));
          setLoading(false);
        })
        .catch((err) => console.log(err));
    };
    fetchProducts_1st();
  }, []);

  const alcoholCatgury = [
    {
      id: 1,
      title: "Vodka",
      image:
        "https://mediacore.kyuubi.it/anticaenotecagiulianelli/media/img/2020/8/8/164241-large-vodka-finlandia-40-lt-1.jpg",
    },
    {
      id: 2,
      title: "Gin",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gin-brands-1648499521.jpg?crop=0.904xw:0.810xh;0.0455xw,0.0816xh&resize=980:*",
    },
    {
      id: 3,
      title: "Rum",
      image:
        "https://www.liquor.com/thmb/Uk23JgGzPc0Rrzil5vNNNjv8xO8=/665x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/LIQUORS-16-best-rums-4847125-final-bc06fe8d7e7b42c0a866f6a78ccb96dc.jpg",
    },
    {
      id: 4,
      title: "Tequila",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/15-09-26-RalfR-WLC-0244.jpg/330px-15-09-26-RalfR-WLC-0244.jpg",
    },
    {
      id: 5,
      title: "Whiskey",
      image:
        "https://cdn.istores.co.il/image/upload/c_limit,w_1200,h_630/v1641304503/clients/105943/36e9590372bfa6f7632f371568f54bf6d484f1e2.jpg",
      Percent: 40,
    },
    {
      id: 6,
      title: "Brandy",
      image:
        "https://manofmany.com/wp-content/uploads/2019/07/10-Best-Brandy-Brands-to-Cap-Off-Your-Night-Assorted-Brandy-Bottle-Brands.jpg",
    },
    {
      id: 7,
      title: "Anise",
      image:
        "https://www.liquor.com/thmb/gcZde87t32DNfXM2vxHafQvBZUo=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/aniseliqueurs_main_720x720-781674d9697e4dce9bb89c21cfe02d9a.jpg",
    },
    {
      id: 8,
      title: "Liqueur",
      image:
        "https://chilledmagazine.com/wp-content/uploads/2015/02/OrangeLiqueurFeatImg-1500x793.jpg",
      Percent: 40,
    },
    {
      id: 9,
      title: "Beer",
      image:
        "https://thumbs.dreamstime.com/z/bottles-famous-global-beer-brands-poznan-pol-mar-including-heineken-becks-bud-miller-corona-stella-artois-san-miguel-143170440.jpg",
    },
    {
      id: 10,
      title: "Wine",
      image:
        "https://static01.nyt.com/images/2021/12/12/dining/12pour14/12pour14-superJumbo.jpg?quality=75&auto=webp",
    },
    {
      title: "Mixers",
      image:
        "https://m.media-amazon.com/images/I/81l9wmZNjCL._SX679_PIbundle-6,TopRight,0,0_SX679SY490SH20_.jpg",
    },
  ];

  /*=============================================================
  ===cart=====cart=====cart=====cart=====cart=====cart=====cart==
  ==============================================================*/
  const [cart, setCart] = useState([]); // Will contain all the products that are in the cart
  // Add function to cart Gets id
  const addToCart = (id) => {
    let IDnum = Number(id);
    let arr = cart;
    let item = arr.findIndex((item) => item.prodct.id === IDnum);
    if (item !== -1) {
      // if the product is already in the cart increase the quantity
      arr[item].quantity++;
      setCart(arr);
    } else {
      // else add the product to the cart
      const i = data.alcohol.filter((item) => {
        if (item.id === IDnum) {
          return item;
        }
      });
      setCart([...cart, { prodct: i[0], quantity: 1 }]);
    }
  };
  //Function Remove Product from the cart
  const removeFromCart = (id) => {
    let IDnum = Number(id);
    const arr = cart.filter((item) => {
      if (item.prodct.id !== IDnum) {
        return item;
      }
    });
    setCart(arr);
  };
  //Function  Change quantity  Product from the cart
  const changeQuantity = (id, quantity) => {
    let IDnum = Number(id);
    const arr = [...cart];
    let item = arr.findIndex((item) => item.prodct.id === IDnum);
    arr[item].quantity = quantity;
    setCart(arr);
  };

  //Function  Clear the cart
  const resetData = () => {
    setLoading(true);
    console.log("resetData");
    setProductsList(data.alcohol);
    setPageNumber(0);
    setLoading(false);
  };
  /*=============================================================
  ==Functions Manipulations============Functions Manipulations====
  ==============================================================*/
  const sortProducts = (sortBy) => {
    setLoading(true);
    console.log("sortProducts", sortBy);
    let arr = [...productsList];
    switch (sortBy) {
      case "Percentage, low to high": // id
        console.log("sortProducts", sortBy);
        setProductsList(arr.sort((a, b) => a.Percent - b.Percent));
        break;
      case "Percentage, high to low": // Percentage
        setProductsList(arr.sort((a, b) => b.Percent - a.Percent));
        break;
      case "Alphabetically, A-Z":
        setProductsList(arr.sort((a, b) => a.title.localeCompare(b.title)));
        break;
      case "Alphabetically, Z-A":
        setProductsList(arr.sort((a, b) => b.title.localeCompare(a.title)));
        console.log(productsList);
        break;
      case "Price, low to high":
        setProductsList(arr.sort((a, b) => a.price - b.price));
        break;
      case "Price, high to low":
        setProductsList(arr.sort((a, b) => b.price - a.price));
        break;
      case "volume, high to low": // volume
        setProductsList(arr.sort((a, b) => a.volume - b.volume));
        break;
      case "volume, low to high":
        setProductsList(arr.sort((a, b) => b.volume - a.volume));
        break;
      default:
        setProductsList(arr.sort((a, b) => a.id - b.id));
        break;
    }
    setPageNumber(0);
    setLoading(false);
  };
  //Function  Filter the products by category
  const switchCategory = (category, subcategory) => {
    console.log("switchCategory", category, subcategory);
    setLoading(true);
    if (category === "accessories") {
      console.log("accessories if");
      const arr = data.alcohol.filter((item) => {
        return item.category.toLowerCase() === "accessories";
      });
      setProductsList(arr);
    } else {
      // this is subcategory bcu category alcohol
      const arr = data.alcohol.filter((item) => {
        return item.subcategory === subcategory;
      });
      setProductsList(arr);
    }
    console.log("productsList", productsList);
    setLoading(false);
  };
  const [search, setSearch] = useState("");

  //Function  Filter the products by productsList will be use when the productsList is changed
  useEffect(() => {
    setLoading(true);
    setPageNumber(0);
    const arr = productsList.slice(pageNumber * 20, pageNumber * 20 + 19);
    setShowProducts(arr);
    window.scrollTo(0, 0);
    setLoading(false);
  }, [productsList]);

  //Function  Filter the products by  pageNumber use to change the page
  useEffect(() => {
    setLoading(true);
    console.log("try 1 pageNumber  useEffect");
    console.log("pageNumber", pageNumber);
    const arr = productsList.slice(pageNumber * 20, pageNumber * 20 + 19);
    console.log("showProducts", showProducts);
    setShowProducts(arr);
    console.log("showProducts", showProducts);
    window.scrollTo(0, 0);
    setLoading(false);
  }, [pageNumber]);

  /*=============================================================
  =
  ==============================================================*/

  return loading ? (
    <loader />
  ) : (
    <ShopContext.Provider
      value={{
        cart,
        changeQuantity,
        removeFromCart,
        addToCart,
        setCart,
        sortProducts,
        productsList,
        cocktailBook,
        showProducts,
        cocktailBook,
        pageNumber,
        setPageNumber,
        setSearch,
        data,
        search,
        setProductsList,
        switchCategory,
      }}
    >
      <Header
        resetData={resetData}
        alcoholCatgury={alcoholCatgury}
        key="Header"
      />

      <Routes>
        <Route path="/" element={<Home key="Home_element" />} key="Home" />
        <Route
          path="/about"
          element={<About key="About_element" />}
          key="About"
        />
        <Route path="/cart" element={<Cart key="Cart_element" />} key="Cart" />
        <Route path="/alcohol">
          <Route
            index
            element={<AlcoholCatgurys alcoholCatgury={alcoholCatgury} />}
          />
          {alcoholCatgury.map((Catgury) => (
            <Route
              path={Catgury.title}
              element={<Alcohol alcoholCatgury={Catgury.title} />}
            />
          ))}
        </Route>
        <Route path="/alcohol/:id" element={<SingleProductPage />} />
        <Route path="/account" element={<Login_Registe />} />
        <Route
          path="/account/stiling_credit_information"
          element={<UserNoLogin />}
        />
        <Route path="/search" element={<Search />} />
        <Route path="/cocktailbook" element={<CocktailBook />} />
        <Route path="/cocktail/:id" element={<CocktailProductPage />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/accessories/:id" element={<SingleProductPage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </ShopContext.Provider>
  );
}

export default App;
