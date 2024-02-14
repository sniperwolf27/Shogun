import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/Index.css';
import App from './App';
import NavBar from './components/NavBar.jsx';
import Slider from './components/Slider.jsx';
import ProductSlider from './components/ProductSlider.jsx';
import ProductsData from './data/products.json';
import Catalog from './components/Catalog.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <NavBar/> 
     <Slider/> 
     <ProductSlider products = {ProductsData}/>
     <Catalog products = {ProductsData}/>
    </React.StrictMode>
);