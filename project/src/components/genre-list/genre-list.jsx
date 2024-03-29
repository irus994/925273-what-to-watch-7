import React from 'react';
import Genre from '../genre/genre.jsx';
import PropTypes from 'prop-types';
import {filmPropTypes} from '../films-prop-types.js';
import {ActionCreator} from '../../store/action.js';
import {connect} from 'react-redux';
import {GENRE_DEFAULT} from '../const.js';
import {getFilms} from '../../store/films-data/selectors.js';
import {getFilmGenre} from '../../store/genre/selectors';

function GenreList(props) {
  const {films, onChangeGenre, activeGenre} = props;
  return (
    <ul className="catalog__genres-list">
      {
        [...new Set([GENRE_DEFAULT, ...films.map((film) => film.genre)])].slice(0, 9).map((genre) => (
          <Genre
            key={genre}
            name={genre}
            onClick={() => onChangeGenre(genre)}
            isActive={activeGenre === genre}
          />))
      }
    </ul>
  );
}

GenreList.propTypes = {
  films: PropTypes.arrayOf(filmPropTypes).isRequired,
  onChangeGenre: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => (
  {
    films: getFilms(state),
    activeGenre: getFilmGenre(state),
  }
);

const mapDispatchToProps = (dispatch) => ({
  onChangeGenre: (newGenre) => {
    dispatch(ActionCreator.changeGenre(newGenre));
  },
});

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
