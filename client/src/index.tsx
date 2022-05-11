import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleRecipe from './components/SingleRecipe';
import CategoryView from './components/CategoryView';
import { store } from './store'
import { Provider } from 'react-redux'
import RecipeList from './components/RecipeList';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="/" element={<RecipeList/>} />
        <Route path="/recipes/:id" element={<SingleRecipe/>} />
        <Route path="/category/:id" element={<CategoryView/>} />
      </Route>
    </Routes>
    {/* <App /> */}
    </BrowserRouter>
    </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
