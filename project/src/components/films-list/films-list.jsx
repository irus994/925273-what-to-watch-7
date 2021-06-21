import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card.jsx';
import {filmPropTypes} from '../films-prop-types.js';
import {isSelectedGenre} from '../../filter-genre.js';

function FilmsList(props) {
  const [activeFilm, setActiveFilm] = useState(null);
  const {films, genre} = props;
  return (
    <div className="catalog__films-list">
      {
        isSelectedGenre(films, genre).map((film) => (
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
  genre: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => (
  {
    films: state.films,
    genre: state.GENRE,
  }
);


export {FilmsList};
export default connect(mapStateToProps)(FilmsList);
