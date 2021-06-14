import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card.jsx';
import {filmPropTypes} from '../films-prop-types';

export default function FilmsList(props) {
  const [, setActiveFilm] = useState(null);
  const {films} = props;
  return (
    <div className="catalog__films-list">
      {
        films.map((film) => (
          <FilmCard
            onPointerEnter={() => {
              setActiveFilm(film);
            }}
            onPointerLeave={() => {
              setActiveFilm(null);
            }}
            key={film.id}
            filmName={film.name}
            prevVideo={film.video}
            id={film.id}
            prevPoster={film.prevPoster}
          />))
      }
    </div>
  );
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(filmPropTypes).isRequired,
};
