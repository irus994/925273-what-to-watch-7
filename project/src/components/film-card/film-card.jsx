import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export default function FilmCard(props) {
  const {filmName, id, prevPoster, onPointerEnter, onPointerLeave} = props;
  return (
    <article onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={`/img/${prevPoster}`} alt={filmName} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}> {filmName}</Link>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  filmName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  prevPoster: PropTypes.string.isRequired,
  onPointerEnter: PropTypes.func,
  onPointerLeave: PropTypes.func,
};
