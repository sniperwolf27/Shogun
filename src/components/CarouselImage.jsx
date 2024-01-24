  // components/ExampleCarouselImage.js
  import React from 'react';
  import PropTypes from 'prop-types';
  import '../styles/Slider.css';

  const CarouselImage = ({ imageUrl, altText }) => {
    return (
      <div className='image-container'>
        <img src={imageUrl} alt={altText} className='slider-image'/>
      </div>
    );
  };

  CarouselImage.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
  };

  export default CarouselImage;
