import React from "react";
import "../styles/ProductDetail.css";
import "../styles/Index.css";

const ProductDetail = ({ product }) => {
    return (
        <div className="main-content">
        <div className="product-detail-container">
            <h1 className="text-title">{product.name}</h1>
            <div className="product-detail">
            <div className="product-detail-image">
                <img src={product.imageOriginal} alt={product.name} />
            </div>
            <div className="product-detail-info">
                <p className="product-detail-price">{product.price}</p>
                <p className="product-detail-description">{product.description}</p>
            </div>
            </div>
        </div>
        </div>
    );
    }
export default ProductDetail;