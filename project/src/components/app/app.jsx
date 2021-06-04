import React from 'react';
import General from '../general/general.jsx';
import PropTypes from 'prop-types';

export default function App(props) {
  const {filmsCount, filmName, genre, year} = props;

  return (
    <General
      filmsCount={filmsCount}
      filmName={filmName}
      genre={genre}
      year={year}
    />
  );
}

App.propTypes = {
  filmsCount: PropTypes.array.isRequired,
  filmName: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};


