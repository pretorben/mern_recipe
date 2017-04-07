import React, { Component } from "react";
import "./style.css";

class RecipeForm extends Component {
 constructor(props) {
   super(props);
   this.state = {
     dish: "",
     ingredients: [],
     directions: []
   };
   this.handleDishChange = this.handleDishChange.bind(this);
   this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
   this.handleDirectionsChange = this.handleDirectionsChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }
 handleDishChange(e) {
   this.setState({ dish: e.target.value });
 }
 handleIngredientsChange(e) {
   this.setState({ ingredients: e.target.value });
 }
 handleDirectionsChange(e) {
   this.setState({ directions: e.target.value });
 }
 handleSubmit(e) {
   e.preventDefault();
   let dish = this.state.dish.trim();
   let ingredients = this.state.ingredients.slice();
   let directions = this.state.directions.slice();
   if (!ingredients || !dish || !directions) {
      return;
   }
   let ingredientsArr = ingredients.split(',');
   let directionsArr = directions.split(',');
   this.props.onRecipeSubmit({
     dish: dish,
     ingredients: ingredientsArr,
     directions: directionsArr
   });
   this.setState({
     dish: "",
     ingredients: [],
     directions: []
   });
 }
 render() {
   return (
     <form className="recipeForm" onSubmit={ this.handleSubmit }>
     <input
       type="text"
       placeholder="Dish name"
       className="recipeFormDish"
       value={ this.state.dish }
       onChange={ this.handleDishChange } />
     <input
       type="text"
       placeholder="Ingredients"
       className="recipeFormIngredients"
       value={ this.state.ingredients }
       onChange={ this.handleIngredientsChange } />
     <input
       type="text"
       placeholder="Directions"
       className="recipeFormDirections"
       value={ this.state.directions }
       onChange={ this.handleDirectionsChange } />
       <input
         type="submit"
         className="recipeFormPost"
         value="Post"/>
     </form>
   )
 }
}

export default RecipeForm;
