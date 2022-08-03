import "./Header.css";
import { Link } from "react-router-dom";
import React from "react";
import logo from "../../logo.jpg";
import { MdOutlineAccountCircle } from "react-icons/md";
import InputFeild from "./InputFeild/InputFeild";
import SlidingCart from "./SlidingCart/SlidingCart";

const Header = ({ resetData, alcoholCatgury, categorys }) => {
  console.log(categorys);
  return (
    <div className="header" key="header">
      <div className="header-left" key="header-left">
        <div className="header-left-logo" key="header-left-logo">
          <samp className="header-left-logo-img" key="header-left-logo-img">
            <img src={logo} alt="logo" />
          </samp>
          <span className="header-left-logo-text" key="header-left-logo-text">
            <Link to="/" onClick={resetData}>
              <h1 key="shoptitle"> liquor store</h1>
            </Link>
          </span>
        </div>
        <div className="header-left-search" key="header-left-search">
          <InputFeild />
        </div>
      </div>
      <div className="header-right" key="header-right">
        <div className="account" key="account">
          <Link to="/account">
            <MdOutlineAccountCircle />
          </Link>
        </div>
        <SlidingCart />
        <div className="header-right-nav" key="header-right-nav">
          <li className="dropdown" key="li_about">
            <Link to="/about">About</Link>
          </li>
          <li className="dropdown" key="li_cart">
            <Link to="/cart" key="li_cart_Link">
              Cart
            </Link>
          </li>
          {categorys.map((category) => {
            category.subcategory.map((subcategory) => {
              console.log(subcategory);
              return;
            });
            return (
              <li className="dropdown" key={`${category.category}dropdown`}>
                <Link
                  to={`/${category.category}`}
                  key={`link-li-to${category.category}`}
                >
                  {category.category}
                </Link>
                <div
                  className="dropdown-content"
                  key={`${category}-dropdown-content`}
                >
                  {category.subcategory.map((subcategory) => {
                    return (
                      <li>
                        <Link
                          to={`/${category.category}/${subcategory.subcategory}`}
                          key={`${category.category}-${subcategory.subcategory}`}
                        >
                          {subcategory.subcategory}
                        </Link>
                      </li>
                    );
                  })}
                </div>
              </li>
            );
          })}

          <li className="dropdown" key="li_cocktailbook">
            <Link to="/Cocktail">CocktailBook</Link>
          </li>
        </div>
      </div>
    </div>
  );
};
export default Header;
/*
 {categorys.array.map((category) => {
            return (
              <li className="dropdown" key={`${category.category}dropdown`}>
                <Link
                  to={`/${category.category}`}
                  key={`link-li-to${category.category}`}
                >
                  {category}
                </Link>
                <div
                  className="dropdown-content"
                  key={`${category}-dropdown-content`}
                >
                  {category.subcategory.array.map((item) => (
                    <li key={`LI_drdn${item.id}`}>
                      <Link to={`/${category.category}/${item.subcategory}`}>
                        {item.subcategory}
                      </Link>
                    </li>
                  ))}
                </div>
              </li>
            );
          })}
*/
