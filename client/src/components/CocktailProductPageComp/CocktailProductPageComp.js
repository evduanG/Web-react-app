import React from "react";
import YoutubeEmbed from "../../components/YoutubeEmbed/YoutubeEmbed";
import "./CocktailProductPageComp.css";
const CocktailProductPageComp = ({ drink }) => {
  return (
    <div className="container">
      <div className="cocktailS-img">
        <img src={drink.image} alt="cocktail" />
      </div>
      <h1>{drink.title}</h1>
      <div className="cocktail-info">
        <div className="cocktail-Ingredient">
          <h2>Ingredients</h2>

          <dl>
            {drink.Ingredients.map((ingredient) => {
              return (
                <>
                  <dt key={`${ingredient.type}`}> {ingredient.type}</dt>
                  <dd> {ingredient.quantity}</dd>
                  <br />
                </>
              );
            })}
          </dl>
        </div>
        <div className="cocktail-Ingredient">
          <h2> how to mack</h2>
          <ul>
            {drink.preparationStages.map((stage) => {
              return (
                <>
                  {" "}
                  <li key={`${stage}`}>{stage.step}</li> <br />
                </>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="cocktail-info">
        <h2>glass : {drink.strGlass}</h2>
        <br />
      </div>
      <YoutubeEmbed videoId={drink.strVideo} />
    </div>
  );
};
export default CocktailProductPageComp;
