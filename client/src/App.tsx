import React from 'react';
import './App.css';
import RecipeList from './components/RecipeList';
import CategoriesNav from './components/CategoriesNav';
import RecipesTest from './components/RecipesTest';


const App = () => 
  <div className='App'>
    <h1 className='header'>RECEPTSAJTEN</h1>
    <CategoriesNav />
    <RecipeList />
    <RecipesTest />
  </div>

export default App;
