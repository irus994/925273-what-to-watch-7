import React from 'react';
import Genre from '../genre/genre.jsx';
import PropTypes from 'prop-types';
import {filmPropTypes} from '../films-prop-types.js';
import {ActionCreator} from '../../store/action.js';
import {connect} from 'react-redux';

const ALL_GENRE_TEXT = 'All genre';
const ALL_GENRE = 'ALL_GENRE';


function GenreList(props) {
  const {films, onChangeGenre} = props;
  return (
    <ul className="catalog__genres-list">
      <Genre
        key={ALL_GENRE_TEXT}
        name={ALL_GENRE_TEXT}
        onClick={() => onChangeGenre(ALL_GENRE)}
      />
      {
        [...new Set(films.map((film) => film.genre))].map((genre) => (
          <Genre
            key={genre}
            name={genre}
            onClick={() => onChangeGenre(genre)}
          />))
      }
    </ul>
  );
}

GenreList.propTypes = {
  films: PropTypes.arrayOf(filmPropTypes).isRequired,
  onChangeGenre: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => (
  {
    changeGenre: state.CHANGE_GENRE,
    films: state.films,
  }
);

const mapDispatchToProps = (dispatch) => ({
  onChangeGenre: (newGenre) => {
    dispatch(ActionCreator.changeGenre(newGenre));
  },
});

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
