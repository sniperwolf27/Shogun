import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "../styles/Catalog.css";
import "../styles/Index.css";
import ProductDetail from "./ProductDetail";

const Catalog = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="main-content">
      <div className="catalog-container">
        <h1 className="text-title">Shop</h1>
        <Row>
          {products.map((product) => (
            <Col key={product.id} className="col-lg-3">
              <div
                className="catalog-item"
                onClick={() => handleProductClick(product)}
              >
                <div className="catalog-image">
                  <img src={product.imageOriginal} alt={product.name} />
                </div>
                <div className="catalog-info">
                  <h3 className="catalog-name">{product.name}</h3>
                  <p className="catalog-price">{product.price}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      {selectedProduct && <ProductDetail product={selectedProduct} />}
    </div>
  );
};

export default Catalog;
