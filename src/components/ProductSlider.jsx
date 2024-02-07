import React from 'react';
import Slider from 'react-slick';
import Product from './Product';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductSlider = ({ products }) => {
  const settings = {
    className: "",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  
  

  if (!products || !products.length) {
    return <div>No hay productos disponibles</div>;
  }

  return (
    <Slider {...settings}>
      {products.map(product => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </Slider>
  );
};

export default ProductSlider;
