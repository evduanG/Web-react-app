import React from "react";
import { Link } from "react-router-dom";
import "./AlcoholCatgurys.css";
import Hero from "../Hero/Hreo";

/**
 * A component that presents the alcohol according to its type
 * @param {} param0
 * @returns
 */
const AlcoholCatgurys = ({ alcoholCatgury }) => {
  return (
    <div>
      <Hero title={"Alcohol Catgury"} sort={true} />
      <div>
        <div className="container">
          {alcoholCatgury.map((item) => {
            return (
              <div className="product-card" key={item.id}>
                <Link to={`/alcohol/${item.title}`}>
                  <div
                    className="product-image"
                    key={`product-image${item.id}`}
                  >
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="product-info" key={`product-info${item.id}`}>
                    <h1>{item.title}</h1>
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
