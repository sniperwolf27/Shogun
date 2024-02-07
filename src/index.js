import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NavBar from './components/NavBar.jsx';
import Slider from './components/Slider.jsx';
import ProductSlider from './components/ProductSlider.jsx';
import ProductsData from './data/products.json';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <NavBar/> 
     <Slider/> 
     <ProductSlider products = {ProductsData}/>
  </React.StrictMode>
);