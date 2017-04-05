"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var RecipesSchema = new Schema({
 dish: String,
 ingredients: Array,
 directions: Array
});

module.exports = mongoose.model("Recipe", RecipesSchema);
