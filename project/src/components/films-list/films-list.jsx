import React, {useState} from 'react';
import FilmCard from '../film-card/film-card.jsx';
import PropTypes from 'prop-types';
import {filmPropTypes} from '../films-prop-types';

export default function FilmsList(props) {
  // eslint-disable-next-line no-unused-vars
  const [activeFilm, setActiveFilm] = useState(null);
  const {films} = props;
  return (
    <div className="catalog__films-list">
      {
        films.map((film) => (
          <FilmCard
            onClick={() => {
              setActiveFilm(film);
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
