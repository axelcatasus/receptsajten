import React from 'react';
import './App.css';
import CategoriesNav from './features/categories/CategoriesNav';
import { Outlet, NavLink } from 'react-router-dom';


const App = () => 
  <div className='App'>
    <NavLink className='header' to="/">
      <h1>RECEPTSAJTEN</h1>
    </NavLink>
    <CategoriesNav />
    <Outlet />
  </div>

export default App;
