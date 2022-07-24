import React from "react";
import "./SortCocktailsButtons.css";

const SortCocktailsButtons = ({ arrayOfValues, title, handle }) => {
  return (
    <div className="sort-cocktails-buttons">
      <div>
        <h1>{title}</h1>
      </div>
      <div className="sort-cocktails-buttons-container">
        {arrayOfValues.map((item) => {
          return (
            <div
              className="sort-cocktails-buttons-container-item"
              key={item.id}
            >
              <li>
                <input
                  type="radio"
                  name={title}
                  value={item.name}
                  checked={item.flag}
                  onChange={(e) => {
                    console.log(e.target.value, e.target.checked);
                    handle(e.currentTarget.value, e.target.checked);
                  }}
                />
                {/* <button
                  type="checkbox"
                  className="sort-cocktails-buttons-container-item-button"
                  value={item.name}
                  checked={item.flag}
                  onClick={(e) => {
                    console.log(e.target.value, e.target.checked);
                    handle(e.currentTarget.value, e.target.checked);
                  }}
                >
                  {item.name}
                </button> */}
                <label>{item.name}</label>
              </li>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SortCocktailsButtons;
