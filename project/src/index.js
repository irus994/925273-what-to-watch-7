import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {FilmsCount, FilmName, Genre, Year} from './components/const.js';

ReactDOM.render(
  <React.StrictMode>
    <App
      filmsCount={FilmsCount}
      filmName={FilmName}
      genre={Genre}
      year={Year}
    />,
  </React.StrictMode>,
  document.getElementById('root'),
);
