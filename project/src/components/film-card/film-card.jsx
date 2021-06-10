import React from 'react';
import PropTypes from 'prop-types';

export default function FilmCard(props) {
  const {filmName, id, prevPoster} = props;
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={`/img/${prevPoster}`} alt={filmName} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={`/films/${id}`}> {filmName}</a>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  filmName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  prevPoster: PropTypes.string.isRequired,
};
