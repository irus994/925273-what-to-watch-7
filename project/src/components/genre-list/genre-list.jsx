import React from 'react';
import Genre from '../genre/genre.jsx';
import PropTypes from 'prop-types';
import {filmPropTypes} from '../films-prop-types.js';
import {ActionCreator} from '../../store/action.js';
import {connect} from 'react-redux';
import {GENRE_DEFAULT} from '../const.js';
import {getFilms} from '../../store/films-data/selectors.js';

function GenreList(props) {
  const {films, onChangeGenre} = props;
  return (
    <ul className="catalog__genres-list">
      {
        [...new Set([GENRE_DEFAULT, ...films.map((film) => film.genre).slice(0, 8)])].map((genre) => (
          <Genre
            key={genre}
            name={genre}
            onClick={() => onChangeGenre(genre)}
          />))
      }
    </ul>
  );
}


const mapStateToProps = (state) => (
  {
    films: getFilms(state),
  }
);

const mapDispatchToProps = (dispatch) => ({
  onChangeGenre: (newGenre) => {
    dispatch(ActionCreator.changeGenre(newGenre));
  },
});

GenreList.propTypes = {
  films: PropTypes.arrayOf(filmPropTypes).isRequired,
  onChangeGenre: PropTypes.func.isRequired,
};

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
