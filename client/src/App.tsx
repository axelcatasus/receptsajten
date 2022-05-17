import React from 'react';
import './App.css';
// import CategoriesNav from './features/categories/CategoriesNav';
import Header from './features/header/HeaderComponent';
import { Outlet, NavLink } from 'react-router-dom';


const App = () => 
  <div className='App'>
    {/* <NavLink className='heading' to="/">
      <h1>RECEPTSAJTEN</h1>
    </NavLink> */}
    <Header />
    {/* <CategoriesNav /> */}
    <Outlet />
  </div>

export default App;
