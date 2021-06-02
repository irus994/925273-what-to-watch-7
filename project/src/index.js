import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const FilmsCount = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21];
const FilmName = 'Имя фильма - ТЕСТ';
const Year = 2021;
const Genre = 'Drama-test';

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
