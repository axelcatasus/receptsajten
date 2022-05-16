import React from 'react';
import './App.css';
import RecipeList from './features/recipes/RecipeList';
import CategoriesNav from './features/categories/CategoriesNav';
import { Outlet, Link } from 'react-router-dom';


const App = () => 
  <div className='App'>
    <Link to="/">
      <h1 className='header'>RECEPTSAJTEN</h1>
    </Link>
    <CategoriesNav />
    {/* <RecipeList /> */}
    <Outlet />
    {/* <RecipesTest /> */}
  </div>

export default App;
