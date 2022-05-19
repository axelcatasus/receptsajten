import './App.css';
import Header from './features/header/HeaderComponent';
import { Outlet } from 'react-router-dom';


const App = () => 
  <div className='App'>
    <Header />
    <Outlet />
  </div>

export default App;
