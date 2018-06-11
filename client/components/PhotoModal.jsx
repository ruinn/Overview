import React from 'react';
import PropTypes from 'prop-types';
import PhotoCarousel from './PhotoCarousel';

const PhotoModal = (props) => {
  const closeModal = () => {
    props.toggleLightbox();
  };

  const style = {
    display: props.lightbox ? 'block' : 'none',
  };

  return (
    <div id="myModal" className="modal" style={style}>
      <span
        className="close cursor"
        onClick={closeModal.bind(this)}
      >
        Close photos &times;
      </span>
      <PhotoCarousel
        urls={props.urls}
        currentSlide={props.currentSlide}
      />
    </div>
  );
};

PhotoModal.propTypes = {
  lightbox: PropTypes.bool.isRequired,
  toggleLightbox: PropTypes.func.isRequired,
  urls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PhotoModal;
