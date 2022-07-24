import "./Header.css";
import { Link } from "react-router-dom";
import React from "react";
import logo from "../../logo.jpg";
import { MdOutlineAccountCircle } from "react-icons/md";
import InputFeild from "./InputFeild/InputFeild";
import SlidingCart from "./SlidingCart/SlidingCart";

const Header = ({ resetData, alcoholCatgury }) => {
  return (
    <div className="header" key="header">
      <div className="header-left" key="header-left">
        <div className="header-left-logo" key="header-left-logo">
          <samp className="header-left-logo-img" key="header-left-logo-img">
            <img src={logo} alt="logo" />
          </samp>
          <span className="header-left-logo-text" key="header-left-logo-text">
            {" "}
            <Link to="/" onClick={resetData}>
              <h1>Ron Chen's</h1>
              <h1> liquor store</h1>
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
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li className="dropdown" key="li_cart">
            {" "}
            <Link to="/cart">Cart</Link>.
          </li>
          <li className="dropdown" key={"alcoholdropdown"}>
            {" "}
            <Link to="/alcohol">Alcohol</Link>
            <div className="dropdown-content">
              {alcoholCatgury.map((item) => {
                return (
                  <li key={`LI_${item.id}`}>
                    {" "}
                    <Link to={`/alcohol/${item.title}`}>{item.title}</Link>
                  </li>
                );
              })}
            </div>
          </li>
          <li className="dropdown" key="li_cocktailbook">
            {" "}
            <Link to="/cocktailbook">CocktailBook</Link>
          </li>
          <li className="dropdown" key="li_accessories">
            <Link to="/accessories">Accessories</Link>
          </li>
        </div>
      </div>
    </div>
  );
};
export default Header;
