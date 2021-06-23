import React from 'react';
import Genre from '../genre/genre.jsx';
import PropTypes from 'prop-types';
import {filmPropTypes} from '../films-prop-types.js';
import {ActionCreator} from '../../store/action.js';
import {connect} from 'react-redux';

const defaultGenre = 'All genre';

function GenreList(props) {
  const {films, onChangeGenre} = props;
  return (
    <ul className="catalog__genres-list">
      {
        [...new Set([defaultGenre, ...films.map((film) => film.genre)])].map((genre) => (
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
    changeGenre: state.CHANGE_GENRE,
    films: state.films,
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
