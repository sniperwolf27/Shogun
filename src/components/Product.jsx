import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Product = ({ id, name, price, image }) => {
  return (
    <div key={id}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
};

export default Product;
