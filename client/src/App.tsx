import React from 'react';
import './App.css';
import RecipeList from './components/RecipeList';
import CategoriesNav from './components/CategoriesNav';


const App = () => 
  <div className='App'>
    <h1 className='header'>RECEPTSAJTEN</h1>
    <CategoriesNav />
    <RecipeList />
  </div>

export default App;
