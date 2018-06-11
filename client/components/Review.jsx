import React from 'react';
import PropTypes from 'prop-types';

const getIcon = (feature) => {
  let icon;
  if (feature === 'Location') {
    icon = 'fas fa-map-marker-alt';
  } else if (feature === 'Staff') {
    icon = 'fas fa-user';
  } else if (feature === 'Cleanliness') {
    icon = 'fas fa-magic';
  }
  return icon;
};

const getIconClassName = (feature) => {
  let className;
  if (feature === 'Location') {
    className = 'badge badge-red';
  } else if (feature === 'Staff') {
    className = 'badge badge-green';
  } else if (feature === 'Cleanliness') {
    className = 'badge badge-blue';
  }
  return className;
};

const Review = props => (
  <div className="col-md-3">
    <div className="row rating-summary">
      <div className="col-md-1 score">
        {props.highlight.rating}
      </div>
      <div className="col-md-9 info">
        <p className="keyword">{props.highlight.keyword}</p>
        <a className="counter" href="#">
          <i className="far fa-comment" />
          <span className="total-reviews">
            {props.highlight.totalReviews} Total Reviews
          </span>
        </a>
      </div>
    </div>
    <ul className="rating-factors">
      {
        props.highlight.topFeatures.map(topFeature => (
          <li key={topFeature.order} className="rating">
            <span className={getIconClassName(topFeature.feature)}>
              <i className={getIcon(topFeature.feature)} />
            </span>
            <span className="top-features">
              {topFeature.ratingFactor} <b>{topFeature.feature}</b>
            </span>
          </li>
        ))
      }
    </ul>
    <button type="button" className="btn btn-link">Read all reviews</button>
  </div>
);

Review.propTypes = {
  highlight: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    keyword: PropTypes.string.isRequired,
    totalReviews: PropTypes.number.isRequired,
    topFeatures: PropTypes.arrayOf(PropTypes.shape({
      order: PropTypes.number.isRequired,
      feature: PropTypes.string.isRequired,
      ratingFactor: PropTypes.string.isRequired,
    })),
  }).isRequired,
};

export default Review;
