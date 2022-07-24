import React, { useEffect, useState } from "react";
import alcohol_hero0 from "./img/alcohol_hero0.jpg";
import alcohol_hero1 from "./img/alcohol_hero1.jpg";
import alcohol_hero2 from "./img/alcohol_hero2.jpg";
import alcohol_hero3 from "./img/alcohol_hero3.jpg";
import alcohol_hero4 from "./img/alcohol_hero4.jpg";
import alcohol_hero5 from "./img/alcohol_hero5.png";
import alcohol_hero6 from "./img/alcohol_hero6.jpg";
import "./Hero.css";

const Hero = ({ title, sortProducts, arry_intrv, sort }) => {
  const [banner, setBanner] = useState(0);
  arry_intrv = [
    alcohol_hero0,
    alcohol_hero1,
    alcohol_hero2,
    alcohol_hero3,
    alcohol_hero4,
    alcohol_hero5,
    alcohol_hero6
  ];
  useEffect(() => {
    if (arry_intrv.length > 1) {
      const interval = setInterval(() => {
        const newBanner = (banner + 1) % arry_intrv.length;
        setBanner(newBanner); // setBanner(banner + 1) % arry_intrv.length
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [banner]);

  return (
    <div
      className="hero"
      key={`hero${title}intrv`}
      style={{
        display: "block",
        backgroundImage: `url(${arry_intrv[banner]})`,
        backgroundRepeat: "no-repeat",
        width: window.innerWidth - 20,
        height: "350px",
        backgroundSize: "cover"
      }}
    >
      <h1 key={`hero${title}-h`}>{title}</h1>
      <div className="hero-ccontent" key={`hero-sort`}>
        {sort ? (
          <div className="product-filter" key={`hero-sort-product-filter`}>
            <span
              className="product-filter-title"
              key={`hero-sort-product-filter-title`}
            >
              <h1></h1>
            </span>
            <li className="collection-sort" key={`hero-sort-collection-sort`}>
              <h2>Sort by:</h2>
              <select
                onChange={(e) => {
                  sortProducts(e.target.value);
                }}
              >
                <option
                  value="Percentage, low to high"
                  key="Percentage, low to high"
                >
                  Percentage, low to high
                </option>
                <option
                  value="Percentage, high to low"
                  key="Percentage, high to low"
                >
                  Percentage, high to low
                </option>
                <option value="Alphabetically, A-Z" key="Alphabetically, A-Z">
                  Alphabetically, A-Z
                </option>
                <option value="Alphabetically, Z-A" key="Alphabetically, Z-A">
                  Alphabetically, Z-A
                </option>
                <option value="Price, low to high" key="Price, low to high">
                  Price, low to high
                </option>
                <option value="Price, high to low" key="Price, high to low">
                  Price, high to low
                </option>
                <option value="volume, high to low" key="volume, high to low">
                  volume, high to low
                </option>
                <option value="volume, low to high" key="volume, low to high">
                  volume, low to high
                </option>
              </select>
            </li>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Hero;
