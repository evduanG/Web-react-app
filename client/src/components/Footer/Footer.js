import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="contain">
          <div className="col">
            <h1>Company</h1>
            <ul key={"footer-col-Company-ul"}>
              <Link to="/about">
                <li key={"footer-col-Company-li-About"}>About</li>
              </Link>
              <Link to="/account">
                {" "}
                <li key={"footer-col-Company-li-Account"}>Account</li>
              </Link>
              <Link to="/cart">
                <li key={"footer-col-Company-li-cart"}>cart</li>
              </Link>
            </ul>
          </div>
          <div className="col" key={"footer-col-Social-div"}>
            <h1 key={"footer-col-Social-h1"}>Social</h1>
            <li key="li-Facebook">
              <BsFacebook />
            </li>
            <li key="li-Instagram">
              <FiInstagram />
            </li>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </>
  );
};
export default Footer;
