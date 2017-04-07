import React, { Component } from 'react';
import App from './App'
import './style.css';

class RecipeList extends Component {
 render() {
   let recipeNodes = this.props.data.map((recipe, index) => {
     let ingredientsArr = recipe.ingredients.slice();
     let ingredients = ingredientsArr.map((ingredient, index) => {
       return <li key={index}>{ingredient}</li>
     });
     let directionsArr = recipe.directions.slice();
     let directions = directionsArr.map((direction, index) => {
       return <li key={index}>{direction}</li>
     });
     return (
            <div className="displayRecipe">
              <h2 key={index}>{recipe.dish}</h2>
              <div className="showIngredients">
                <h3>Ingredients:</h3>
                {ingredients}
              </div>
              <div className="showDirections">
                <h3>Directions:</h3>
                {directions}
              </div>
              <App
                uniqueID={ recipe['_id'] }
                onRecipeDelete={ this.props.onRecipeDelete }
                onRecipeUpdate={ this.props.onRecipeUpdate }
                key={ recipe['_id'] }>
              </App>
            </div>
     )
   });
   return (
     <div className="recipeList">
     { recipeNodes }
     </div>
   )
 }
}

export default RecipeList;
