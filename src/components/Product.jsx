import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Product.css';
import '../data/products.json';
import ProductDetail from './ProductDetail';
import ProductData from '../data/products.json';

const Product = ({ id, name, price, imageOriginal, imageHover }) => {
  const [hoveredImage, setHoveredImage] = useState(null);
  console.log("imageOriginal:", imageOriginal); // Agrega este console.log para verificar la ruta de la imagen original
  console.log("imageHover:", imageHover); // Agrega este console.log para verificar la ruta de la imagen al hacer hover
  return (
    <div className='product-container'>
        <div key={id} className="product-item"> 
            <div className='product-image'>
                <img
                src={hoveredImage || imageOriginal} // Si hoveredImage está definido, muestra esa imagen, de lo contrario, muestra la imagen original
                alt={name}
                onClick={
                    () => {
                            <ProductDetail products={ProductData}/>
                            console.log("ProductDetail:", ProductDetail);
                    }
                } // Agrega un console.log para verificar que el evento onClick funciona
                onMouseEnter={() => setHoveredImage(imageHover)} // Cambia la imagen al hacer hover
                onMouseLeave={() => setHoveredImage(null)} // Restablece la imagen cuando el mouse deja el área
                />
            </div>
                <div className='product-info'>
                    <h3 className='product-name text-title'>{name}</h3>
                    <p className='product-price'>{price}</p>
                </div>
        </div>
    </div>
  );
};

export default Product;


