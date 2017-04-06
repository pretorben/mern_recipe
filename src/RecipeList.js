import React, { Component } from 'react';
import Recipe from './Recipe';
import './style.css';

class RecipeList extends Component {
 render() {
   let recipeNodes = this.props.data.map(recipe => {
     let ingredientsArr = recipe.ingredients.slice();
     let directionsArr = recipe.directions.slice();
     let ingredients = ingredientsArr.map((ingredient, index) => {
       return <div>
                <h2>Ingredients:</h2>
                <li key={index}>{ingredient}</li>
              </div>
     })
     let directions = directionsArr.map((direction, index) => {
       return <div>
                <h2>Directions:</h2>
                <li key={index}>{direction}</li>
              </div>
     })
     return (
       <Recipe
         dish={ recipe.dish }
         uniqueID={ recipe['_id'] }
         onRecipeDelete={ this.props.onRecipeDelete }
         onRecipeUpdate={ this.props.onRecipeUpdate }
         key={ recipe['_id'] }>
       </Recipe>,
       [ingredients, directions]
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
