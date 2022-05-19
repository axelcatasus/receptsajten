import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import SingleRecipe from './features/recipes/SingleRecipe';
import CategoryView from './features/categories/CategoryView';
import { store } from './app/store'
import { Provider } from 'react-redux'
import RecipeList from './features/recipes/RecipeList';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
    {/* <BrowserRouter> */}
    <HashRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="/" element={<RecipeList/>} />
        <Route path="/recipes/:id" element={<SingleRecipe/>} />
        <Route path="/category/:category" element={<CategoryView/>} />
      </Route>
    </Routes>
    </HashRouter>
    {/* </BrowserRouter> */}
    </Provider>
);

reportWebVitals();
