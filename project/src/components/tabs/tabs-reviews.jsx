import React from 'react';
import PropTypes from 'prop-types';

export default function TabsReviews(props) {
  const {reviewRating, reviewText, userName, commentDate} = props;
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">{reviewText}</p>
            <footer className="review__details">
              <cite className="review__author">{userName}</cite>
              <time className="review__date" dateTime="2016-12-24">{commentDate}</time>
            </footer>
          </blockquote>

          <div className="review__rating">{reviewRating}</div>
        </div>
      </div>
    </div>
  );
}

TabsReviews.propTypes = {
  reviewRating: PropTypes.number.isRequired,
  reviewText: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  commentDate: PropTypes.string.isRequired,
};
