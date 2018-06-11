import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

const PhotoCarousel = (props) => {
  const getClassName = (url) => {
    let className;
    if (url === props.currentSlide) {
      className = 'carousel-item active';
    } else {
      className = 'carousel-item';
    }
    return className;
  };

  const handlePrevClick = () => {
    console.log('hello!');
    $('.carousel').carousel('prev');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              {
                props.urls.map(url => (
                  <div className={getClassName(url)}>
                    <img
                      src={url}
                      alt=""
                      className="d-block w-100 photo-carousel"
                    />
                  </div>
                ))
              }
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" onClick={handlePrevClick.bind(this)} />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

PhotoCarousel.propTypes = {
  urls: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentSlide: PropTypes.string.isRequired,
};

export default PhotoCarousel;
