import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import RecipeList from './RecipeList.js';
import About from './About.js';
import Recipe from './Recipe.js';
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
   let dish = (this.state.dish) ? this.state.dish : null;
   let ingredients = (this.state.ingredients) ? this.state.ingredients : null;
   let directions = (this.state.directions) ? this.state.directions : null;
   let recipe = { dish: dish, ingredients: ingredients, directions: directions };
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
     <Router>
       <div className="recipe">
         <nav>
           <Link to="/">Home</Link>
           <Link to="/about">About</Link>
         </nav>
         <Route exact path="/" component={RecipeList} />
         <Route path="/about" component={About} />
         <Route path="/recipes/:_id" component={Recipe} />
       </div>
     </Router>
   )
 }
}

export default Recipe;
