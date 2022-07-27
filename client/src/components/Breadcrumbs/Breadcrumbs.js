import * as React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import ShopContext from "../../context/ShopContext";
import "./Breadcrumbs.css";

const Breadcrumbs = () => {
  const Location = useLocation();
  const { resetData } = useContext(ShopContext);
  let arrOfLink = Location.pathname.split("/").filter((itam) => {
    return itam !== "";
  });
  console.log("Location arr", arrOfLink);
  console.log("Location", Location);

  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    textDecoration: "underline"
  };
  let nonActiveStyle = {
    display: "none"
  };

  let activeClassName = "underline";
  let strPhat = "";
  console.log("strPhat", strPhat);
  return (
    <nav className="breadcrumbs">
      <div className="breadcrumbs__item" key="div_breadcrumbs__item">
        <Link to="/" onClick={resetData}>
          Home
        </Link>
      </div>
      {arrOfLink.map((itam) => {
        strPhat += "/" + itam;
        return (
          <div className="breadcrumbs__item">
            <Link
              to={strPhat}
              className="breadcrumbs__item"
              key={`nevLink${itam}`}
            >
              {itam}
            </Link>
          </div>
        );
      })}
    </nav>
  );
};
export default Breadcrumbs;
