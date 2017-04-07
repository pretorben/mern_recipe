import React, { Component } from "react";
import "./style.css";

class App extends Component {
 constructor(props) {
   super(props);
   this.state= {
     toBeUpdated: false,
     dish: "",
     ingredients: [],
     directions: []
   };
   this.deleteRecipe = this.deleteRecipe.bind(this);
   this.updateRecipe = this.updateRecipe.bind(this);
   this.handleDishChange = this.handleDishChange.bind(this);
   this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
   this.handleDirectionsChange = this.handleDirectionsChange.bind(this);
   this.handleRecipeUpdate = this.handleRecipeUpdate.bind(this);
 }
 updateRecipe(e) {
   e.preventDefault();
   this.setState({ toBeUpdated: !this.state.toBeUpdated });
 }
 handleRecipeUpdate(e) {
   e.preventDefault();
   let id = this.props.uniqueID;
   let dish = this.state.dish.slice();
   let ingredients = this.state.ingredients.slice();
   console.log(ingredients);
   let directions = this.state.directions.slice();
   console.log(directions);
   let ingredientsArr = ingredients.split(',');
   let directionsArr = directions.split(',');
   let recipe = { dish: dish, ingredients: ingredientsArr, directions: directionsArr };
   this.props.onRecipeUpdate(id, recipe);
   this.setState({
     toBeUpdated: !this.state.toBeUpdated,
     dish: "",
     ingredients: [],
     directions: []
   });
 }
 deleteRecipe(e) {
   e.preventDefault();
   let id = this.props.uniqueID;
   this.props.onRecipeDelete(id);
 }
 handleIngredientsChange(e) {
   this.setState({ ingredients: e.target.value });
 }
 handleDirectionsChange(e) {
   this.setState({ directions: e.target.value });
 }
 handleDishChange(e) {
   this.setState({ dish: e.target.value });
 }
 render() {
   return (
     <div className="recipe">
       <div className="buttons">
         <button onClick={ this.updateRecipe }>Update</button>
         <button onClick={ this.deleteRecipe }>Delete</button>
       </div>
       { (this.state.toBeUpdated)
       ? (<form onSubmit={ this.handleRecipeUpdate }>
           <input
             type="text"
             placeholder="Update dish name"
             className="recipeFormDish"
             value={ this.state.dish }
             onChange={ this.handleDishChange } />
           <input
             type="text"
             placeholder="Update ingredients"
             className="recipeFormIngredients"
             value={ this.state.ingredients }
             onChange={ this.handleIngredientsChange } />
           <input
             type="text"
             placeholder="Update directions"
             className="recipeFormDirections"
             value={ this.state.directions }
             onChange={ this.handleDirectionsChange } />
           <input
             type="submit"
             className="recipeFormPost"
             value="Update" />
       </form>)
       : null}
     </div>
   )
 }
}

export default App;
