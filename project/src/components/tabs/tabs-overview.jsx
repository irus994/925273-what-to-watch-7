import React from 'react';
import PropTypes from 'prop-types';
import {getAssessment} from '../utils.js';

export default function TabsOverview(props) {
  const {description, director, starring, rating, scoresCount} = props;
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getAssessment(rating)}</span>
          <span className="film-rating__count"> {scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}
        </p>

        <p className="film-card__director"><strong>Director: {director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>Starring: {starring}
          </strong>
        </p>
      </div>
    </>
  );
}

TabsOverview.propTypes = {
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.array.isRequired,
  rating: PropTypes.number.isRequired,
  scoresCount: PropTypes.number.isRequired,
};
