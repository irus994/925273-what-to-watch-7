import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card.jsx';
import {filmPropTypes} from '../films-prop-types';

export default function FilmsList(props) {
  const [activeFilm, setActiveFilm] = useState(null);
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
            id={film.id}
            prevPoster={film.prevPoster}
            video={film.video}
            isActive={activeFilm === film}
          />))
      }
    </div>
  );
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(filmPropTypes).isRequired,
};
