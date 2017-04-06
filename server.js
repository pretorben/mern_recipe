"use strict";

var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var Recipe = require("./model/recipes");

var app = express();
var router = express.Router();

var port = process.env.PORT || 8080;
mongoose.connect('mongodb://pretorben:roadkill@ds149030.mlab.com:49030/mern-recipe');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  res.setHeader("Cache-Control", "no-cache");
  next();
});

router.get("/", (req, res) => {
  res.json({ message: "API Initialized!"});
});

router.route("/recipes")
  .get((req, res) => {
    Recipe.find((err, recipe) => {
    if (err)
      res.send(err);
      res.json(recipe);
    });
  })
  .post(function(req, res) {
    var recipe = new Recipe();
    recipe.dish = req.body.dish;
    recipe.ingredients = req.body.ingredients;
    recipe.directions = req.body.directions;
    recipe.save(function(err) {
    if (err)
      res.send(err);
      res.json({ message: "Recipe successfully added!" });
    });
  });
router.route("/recipes/:recipe_id")
  .get((req, res) => {
    Recipe.findById(req.params.recipe_id, (err, recipe) => {
      if(err)
        res.send(err);
        res.json(recipe);
    });
  })
  .put(function(req, res) {
    Recipe.findById(req.params.recipe_id, (err, recipe) => {
      if (err)
        res.send(err);
      (req.body.dish) ? recipe.dish = req.body.dish : null;
      (req.body.ingredients) ? recipe.ingredients = req.body.ingredients : null;
      (req.body.directions) ? recipe.directions = req.body.directions : null;
      recipe.save(function(err) {
        if (err)
          res.send(err);
          res.json({ message: "Recipe has been updated" });
      });
    });
  })
  .delete(function(req, res) {
    Recipe.remove({ _id: req.params.recipe_id }, (err, recipe) => {
      if (err)
        res.send(err);
        res.json({ message: "Recipe has been deleted" });
    });
  });
app.use("/api", router);
app.listen(port);
