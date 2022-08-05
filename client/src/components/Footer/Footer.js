import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = ({ categorys }) => {
  console.log(categorys);
  return (
    <>
      <div className="footer">
        <div className="contain">
          <div className="col">
            <h1>Company</h1>
            <ul>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/account">
                {" "}
                <li>Account</li>
              </Link>
              <Link to="/cart">
                <li>cart</li>
              </Link>
              <li>Social</li>
              <li>Get in touch</li>
            </ul>
          </div>
          {categorys.map((category) => {
            return (
              <div className="a">
                <Link
                  to={`/${category.category}`}
                  key={`link-li-to${category.category}`}
                >
                  <h1>{category.category}</h1>
                </Link>
                {category.subcategory.map((subcategory) => {
                  return (
                    <li>
                      <Link
                        to={`/${category.category}/${subcategory.subcategory}`}
                        key={`${category.category}-${subcategory.subcategory}-Footer`}
                      >
                        {subcategory.subcategory}
                      </Link>
                    </li>
                  );
                })}
              </div>
            );
          })}
          <div className="col social">
            <h1>Social</h1>
            <ul></ul>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </>
  );
};
export default Footer;
/*
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

*/
