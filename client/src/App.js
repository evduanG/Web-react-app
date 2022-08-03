import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
// path: liquor-store\src\App.js
// pageing
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Accessories from "./pages/Accessories";
import Alcohol from "./pages/Alcohol";
import CocktailBook from "./pages/CocktailBook";
import NoMatch from "./pages/NoMatch";
import CocktailProductPage from "./pages/CocktailProductPage";
import Search from "./pages/Search";
import UserNoLogin from "./pages/UserNoLogin";
import SingleProductPage from "./pages/SingleProductPage";
import Footer from "./components/Footer/Footer";
// compmonents
import Header from "./components/Header/Header";
import AlcoholCatgurys from "./components/AlcoholCatgury/AlcoholCatgurys";
import Login_Registe from "./components/Login_Registe/Login_Registe";
import Loader from "./components/Loader/Loader";
import ShopContext from "./context/ShopContext";
import CartContext from "./context/CartContext";
import DataContext from "./context/DataContext";
// products data context

function App() {
  /*=============================================================
  ==data====data====data====data====data====data====data====data==
  ==============================================================*/
  const [data, setData] = useState(); // data for all products will not be changed after the first time
  const [productsList, setProductsList] = useState([]); // Will contain all the products that can be displayed by the filter
  const [pageNumber, setPageNumber] = useState(0); //
  const [showProducts, setShowProducts] = useState([]); // Will contain the products that are displayed on the current page (productsList) maximun of 20 products

  const [cocktailBook, setCocktailBook] = useState([]); // Will contain all the cocktails that can be displayed by the filter
  const [categorys, setCategorys] = useState([]);
  const [loading, setLoading] = useState(false); // Will be true when the data is loading from the server

  useEffect(() => {
    fetchProducts_1st();
  }, []);

  const fetchProducts_1st = async () => {
    setLoading(true);
    fetch("/api")
      .then((res) => res.json())
      .then((dataR) => {
        setData(dataR);
        setProductsList(dataR.alcohol);
        setCocktailBook(dataR.cocktailBook);
        setShowProducts(dataR.alcohol.slice(0, 19));
        setCategorys(configCatgury(dataR));
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

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
    setProductsList(data.alcohol);
    setPageNumber(0);
    setLoading(false);
  };
  /*=============================================================
  ==Functions Manipulations============Functions Manipulations====
  ==============================================================*/
  const sortProducts = (sortBy) => {
    setLoading(true);
    let arr = [...productsList];
    switch (sortBy) {
      case "Percentage, low to high": // id
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
    setLoading(true);
    if (category === "accessories") {
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
    const arr = productsList.slice(pageNumber * 20, pageNumber * 20 + 19);
    setShowProducts(arr);
    window.scrollTo(0, 0);
    setLoading(false);
  }, [pageNumber]);

  /*=============================================================
  =
  ==============================================================*/
  /**
   */
  const configCatgury = (dataR) => {
    let category = [];
    let arrToFindSubcategory = [];
    dataR.alcohol.map((element) => {
      let index = category.findIndex(
        (elementInCategory) => elementInCategory.category === element.category
      );

      if (index >= 0) {
        if (!arrToFindSubcategory.includes(element.subcategory)) {
          arrToFindSubcategory.push(element.subcategory);
          let subCategoryToAdd = {
            id: arrToFindSubcategory.length,
            subcategory: element.subcategory,
            image: element.image
          };
          category[index].subcategory.push({
            id: arrToFindSubcategory.length,
            subcategory: element.subcategory,
            image: element.image
          });
        }
      } else {
        arrToFindSubcategory.push(element.subcategory);
        // element.category is not in category
        let categoryToAdd = {
          id: category.length,
          category: element.category,
          image: element.image,
          subcategory: [
            {
              id: arrToFindSubcategory.length,
              subcategory: element.subcategory,
              image: element.image
            }
          ]
        };
        category.push({
          id: category.length,
          category: element.category,
          image: element.image,
          subcategory: [
            {
              id: arrToFindSubcategory.length,
              subcategory: element.subcategory,
              image: element.image
            }
          ]
        });
      }
    });
    return category;
  };

  const configLoading = () => {
    if (loading || typeof data === "undefined") {
      console.log("config Loading is true");
      return true;
    }
    return false;
  };

  return configLoading() ? (
    <Loader />
  ) : (
    <ShopContext.Provider
      value={{
        pageNumber,
        setPageNumber,
        setSearch,
        search,
        showProducts,
        setLoading,
        loading,
        data,
        sortProducts,
        productsList,
        cocktailBook,
        setProductsList,
        switchCategory,
        cart,
        changeQuantity,
        removeFromCart,
        addToCart,
        setCart,
        resetData
      }}
    >
      <CartContext.Provider
        value={{ cart, changeQuantity, removeFromCart, addToCart, setCart }}
      >
        <DataContext.Provider
          value={{
            data,
            sortProducts,
            productsList,
            cocktailBook,
            setProductsList,
            switchCategory
          }}
        >
                <Header
            resetData={resetData}
            alcoholCatgury={data.alcoholCatgury}
            categorys={categorys}
            key="Header"
          />
          <div id="App-page" key="App-page">
            <Routes>
              <Route
                path="/"
                element={<Home key="Home_element" />}
                key="Home"
              />
              <Route
                path="/about"
                element={<About key="About_element" />}
                key="About"
              />
              <Route
                path="/cart"
                element={<Cart key="Cart_element" />}
                key="Cart"
              />
              {categorys.map((element) => {
                return (
                  <>
                    <Route path={`/${element.category}`} key={element.id}>
                      <Route
                        index
                        element={<AlcoholCatgurys argCatgury={element} />}
                      />
                      {element.subcategory.map((subcategory) => {
                        return (
                          <>
                            <Route
                              path={subcategory.subcategory}
                              element={
                                <Alcohol
                                  alcoholCatgury={subcategory.subcategory}
                                />
                              }
                              key={subcategory.key}
                            />
                            <Route
                              path={`/${element.category}/${subcategory.subcategory}/:id`}
                              element={<SingleProductPage />}
                            />
                          </>
                        );
                      })}
                    </Route>
                    ;
                  </>
                );
              })}
              <Route path="/cocktail" element={<CocktailBook />} />
              <Route path="/cocktail/:id" element={<CocktailProductPage />} />
              <Route path="/account" element={<Login_Registe />} />
              <Route
                path="/account/stiling_credit_information"
                element={<UserNoLogin />}
              />
              <Route path="/search" element={<Search />} />

              <Route path="*" element={<NoMatch />} />
            </Routes>
          </div>
          <Footer />
        </DataContext.Provider>
      </CartContext.Provider>
    </ShopContext.Provider>
  );
}

export default App;
