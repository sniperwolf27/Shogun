import React from "react";
import {Col, Row} from "react-bootstrap";
import "../styles/Catalog.css";
import "../styles/Index.css"



const Catalog = ({products}) => {
    return (
        <div className="main-content">
            <div className="catalog-container">
                <h1 className="text-title">Shop</h1>
                <Row>
                    {products.map((product) => (
                        <Col key={product.id} className="col-lg-3">
                            <div className="catalog-item">
                                <div className="catalog-image">
                                    <img src={product.imageOriginal} 
                                    alt={product.name} />
                                </div >
                                <div className="catalog-info">
                                        <h3 className="catalog-name">{product.name}</h3>
                                        <p className="catalog-price">{product.price}</p>
                                </div>
                                </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default Catalog;