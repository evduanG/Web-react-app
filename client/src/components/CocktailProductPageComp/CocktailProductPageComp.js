import React from "react";
import YoutubeEmbed from "../../components/YoutubeEmbed/YoutubeEmbed";
import "./CocktailProductPageComp.css";
const CocktailProductPageComp = ({ drink }) => {
  return (
    <div className="cocktailS">
      <h3>{drink.title}</h3>
      <div className="cocktailS-img">
        <img src={drink.image} alt="cocktail" />
      </div>
      <div className="cocktail-info">
        <div className="cocktail-info">
          <h4>{drink.strCategory}</h4>
          <div className="cocktail-Ingredient">
            <h4>Ingredients</h4>
            <ul>
              {drink.Ingredients.map((ingredient) => {
                return (
                  <li key={`${ingredient.type}`}>
                    {ingredient.type} {ingredient.quantity}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="cocktail-info">
            <h4> how to mack</h4>
            <ul>
              {drink.preparationStages.map((stage) => {
                return <li key={`${stage}`}>{stage.step}</li>;
              })}
            </ul>
          </div>
        </div>
        <h2>glass : {drink.strGlass}</h2>
        <h2>ingredients :</h2>
      </div>
      <YoutubeEmbed videoId={drink.strVideo} />
    </div>
  );
};
export default CocktailProductPageComp;
