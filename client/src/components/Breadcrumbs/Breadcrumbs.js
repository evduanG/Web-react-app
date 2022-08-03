import * as React from "react";
import { Link, /* 0 NavLink ,*/ useLocation } from "react-router-dom";
import { useContext } from "react";
import ShopContext from "../../context/ShopContext";
import "./Breadcrumbs.css";

const Breadcrumbs = () => {
  const Location = useLocation();
  const { resetData } = useContext(ShopContext);
  let arrOfLink = Location.pathname.split("/").filter((itam) => {
    return itam !== "";
  });

  let strPhat = "";
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
