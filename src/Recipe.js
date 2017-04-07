import React, { Component } from 'react';

class Recipe extends Component{
  constructor(props) {
    super(props);
    this.state = {
      recipe: this.props.location.state.selectedRecipe
    };
  }
  render(){
    let ingredients = this.state.recipe.ingredients.map((ingredient, index) => {
        return <div className="showIngredients">
                  <li key={index}>{ingredient}</li>
               </div>
    });
    let directions = this.state.recipe.directions.map((direction, index) => {
        return <li key={index}>{direction}</li>
    });
    return(<div className="showRecipe">
      <h2>{this.state.recipe.dish}</h2>
      <div className="showDirections">
        <h3>Ingredients:</h3>
        {ingredients}
      </div>
      <h3>Directions:</h4>
    </div>)
  }
}

export default Stocks
