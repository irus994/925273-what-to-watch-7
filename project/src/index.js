import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Genre, Year} from './components/const.js';
import {films} from './mocks/films.js';

ReactDOM.render(
  <React.StrictMode>
    <App
      // filmsCount={FilmsCount}
      filmName={films[1].name}
      genre={Genre}
      year={Year}
    />,
  </React.StrictMode>,
  document.getElementById('root'),
);
