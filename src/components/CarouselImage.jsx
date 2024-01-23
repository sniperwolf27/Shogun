// components/ExampleCarouselImage.js
import React from 'react';
import PropTypes from 'prop-types';

const CarouselImage = ({ imageUrl, altText }) => {
  return (
    <div>
      <img src={imageUrl} alt={altText} className='slider-image'/>
    </div>
  );
};

CarouselImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default CarouselImage;
