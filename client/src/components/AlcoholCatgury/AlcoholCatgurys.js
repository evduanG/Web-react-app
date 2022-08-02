import React from "react";
import { Link } from "react-router-dom";
import "./AlcoholCatgurys.css";
import Hero from "../Hero/Hreo";

const AlcoholCatgurys = ({ argCatgury }) => {
  console.log("argCatgury", argCatgury);
  return (
    <div>
      <Hero title={`${argCatgury.category} Catgury`} sort={false} />
      <div>
        <div className="container">
          {argCatgury.subcategory.map((item) => {
            return (
              <div className="product-card" key={item.id}>
                <Link to={`/${argCatgury.category}/${item.subcategory}`}>
                  <div
                    className="product-image"
                    key={`product-image${item.id}`}
                  >
                    <img src={item.image} alt={item.subcategory} />
                  </div>
                  <div className="product-info" key={`product-info${item.id}`}>
                    <h1>{item.subcategory}</h1>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default AlcoholCatgurys;
