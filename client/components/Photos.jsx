import React from 'react';
import PropTypes from 'prop-types';

const Photos = (props) => {
  const openModal = (slideIndex, url) => {
    props.updateCurrentSlide(slideIndex, url);
    props.toggleLightbox();
  };

  return (
    <section id="photo-gallery" className="container d-none d-sm-block">
      <div className="row no-gutters gallery">
        {
          props.urls.map((url, i) => (
            <div className="col-md-1 col-sm-3 gallery-image">
              <img
                className="rounded img-fluid"
                src={url}
                alt=""
                onClick={openModal.bind(this, i, url)}
              />
            </div>
          ))
        }
      </div>
    </section>
  );
};

Photos.propTypes = {
  urls: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleLightbox: PropTypes.func.isRequired,
  updateCurrentSlide: PropTypes.func.isRequired,
};

export default Photos;
