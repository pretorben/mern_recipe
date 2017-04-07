import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './style.css';

class RecipeList extends Component {
 render() {
   let recipeNodes = this.props.data.map((recipe, index) => {
     let pathname = `/recipes/${recipe._id}`;
     return <li key={index}>{recipe.dish} (<Link to={{
                                            pathname,
                                            state: {selectedRecipe: recipe}
                                          }}>{recipe._id}</Link>)

            </li>
   });
   return (
     <div className="recipeList">
     { recipeNodes }
     </div>
   )
 }
}

export default RecipeList;
