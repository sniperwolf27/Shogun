import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Product.css';
import '../data/products.json';
const Product = ({ id, name, price, imageOriginal, imageHover }) => {
  const [hoveredImage, setHoveredImage] = useState(null);
  console.log("imageOriginal:", imageOriginal); // Agrega este console.log para verificar la ruta de la imagen original
  console.log("imageHover:", imageHover); // Agrega este console.log para verificar la ruta de la imagen al hacer hover
  return (
    <div key={id} className="product-item">
      <img
        src={hoveredImage || imageOriginal} // Si hoveredImage está definido, muestra esa imagen, de lo contrario, muestra la imagen original
        alt={name}
        onMouseEnter={() => setHoveredImage(imageHover)} // Cambia la imagen al hacer hover
        onMouseLeave={() => setHoveredImage(null)} // Restablece la imagen cuando el mouse deja el área
      />
      <h3 className='tittle'>{name}</h3>
      <p>{price}</p>
    </div>
  );
};

export default Product;


