import React from 'react';
import './App.css';
import RecipeList from './components/RecipeList';
import CategoriesNav from './components/CategoriesNav';
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
