import React, { Component } from "react";
import axios from "axios";
import RecipeList from "./RecipeList";
import RecipeForm from "./RecipeForm";
import './style.css';

class RecipeBox extends Component {
 constructor(props) {
   super(props);
   this.state = { data: [] };
   this.loadRecipesFromServer = this.loadRecipesFromServer.bind(this);
   this.handleRecipeSubmit = this.handleRecipeSubmit.bind(this);
   this.handleRecipeDelete = this.handleRecipeDelete.bind(this);
   this.handleRecipeUpdate = this.handleRecipeUpdate.bind(this);
 }
 loadRecipesFromServer() {
   axios.get(this.props.url)
  .then(res => {
    this.setState({ data: res.data });
  });
 }
 handleRecipeSubmit(recipe) {
   let recipes = this.state.data;
   recipe.id = Date.now();
   let newRecipes = recipes.concat([recipe]);
   this.setState({ data: newRecipes });
   axios.post(this.props.url, recipe)
   .catch(err => {
     console.error(err);
     this.setState({ data: recipes });
   });
 }
 handleRecipeDelete(id) {
 axios.delete(`${this.props.url}/${id}`)
 .then(res => {
 console.log("Recipe deleted");
 })
 .catch(err => {
 console.error(err);
 });
 }
 handleRecipeUpdate(id, recipe) {
   axios.put(`${this.props.url}/${id}`, recipe)
   .catch(err => {
     console.log(err);
   });
 }
 componentDidMount() {
   this.loadRecipesFromServer();
 }
 render() {
   return (
     <div className="recipeBox">
       <h2 className="title">Recipes:</h2>
       <RecipeList
       onRecipeDelete={ this.handleRecipeDelete }
       onRecipeUpdate={ this.handleRecipeUpdate }
       data={ this.state.data }/>
       <RecipeForm onRecipeSubmit={ this.handleRecipeSubmit }/>
     </div>
   )
 }
}

export default RecipeBox;
