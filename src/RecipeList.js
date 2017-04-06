import React, { Component } from 'react';
import Recipe from './Recipe';
import './style.css'

class RecipeList extends Component {
 render() {
   let recipeNodes = this.props.data.map(recipe => {
     return (
       <Recipe
         dish={ recipe.dish }
         uniqueID={ recipe['_id'] }
         onRecipeDelete={ this.props.onRecipeDelete }
         onRecipeUpdate={ this.props.onRecipeUpdate }
         key={ recipe['_id'] }>
         {recipe.ingredients}
         {recipe.directions}
       </Recipe>
     )
   })
   return (
     <div className="recipeList">
     { recipeNodes }
     </div>
   )
 }
}

export default RecipeList;
