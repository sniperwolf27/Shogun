import React from 'react';
import Slider from 'react-slick';
import Product from './Product';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Slider.css'
import { Col, Row} from 'react-bootstrap';
const ProductSlider = ({ products }) => {
    
  const settings = {
    className: "center",
    infinite: true,
    dots: true,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 4,
    initialSlide: 0, 
    slidesToScroll: 2,
    responsive: [
        {
          breakpoint: 1360,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 0, // Establece el índice inicial del slider en 0 (el primer producto)
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0 // Establece el índice inicial del slider en 0 (el primer producto)
          }
        }
      ]
    };

  if (!products || !products.length) {
    return(
        <div>
            <h1 className='text-title'>No hay productos disponibles</h1>
        </div>
    );
  }

  return (
    <div className='main-content'>
        <div stile>
        <Row>
            <Col>
                <h1 className='product-info text-title'>New Products</h1>
            </Col>
            <Col className='col-lg-4 mx-auto'>
                <h1 className='product-info text-title'>View All</h1>
            </Col>
        </Row>
        </div>
      <Slider {...settings}>
        {products.map(product => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            imageOriginal={product.imageOriginal}
            imageHover={product.imageHover}
          />
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
