import React from 'react';
import PropTypes from 'prop-types';

const PhotoCarousel = (props) => {
  const getClassName = (url, i) => {
    let className;
    if (url === props.currentSlide.slideUrl && i === props.currentSlide.slideIndex) {
      className = 'carousel-item active';
    } else {
      className = 'carousel-item';
    }
    return className;
  };

  return (
    <div className="container">
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              {
                props.urls.map((url, i) => (
                  <div className={getClassName(url, i)}>
                    <img
                      src={url}
                      alt=""
                      className="d-block w-100"
                    />
                  </div>
                ))
              }
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
    </div>
  );
};

PhotoCarousel.propTypes = {
  urls: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentSlide: PropTypes.shape({
    slideIndex: PropTypes.number,
    slideUrl: PropTypes.string,
  }).isRequired,
};

export default PhotoCarousel;
