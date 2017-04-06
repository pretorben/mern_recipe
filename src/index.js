import React from 'react';
import ReactDOM from 'react-dom';
import RecipeBox from './RecipeBox';

ReactDOM.render(
  <RecipeBox
    url="https://mlab.com/databases/mern-recipe/collections/recipes"
  />,
  document.getElementById('root')
);
