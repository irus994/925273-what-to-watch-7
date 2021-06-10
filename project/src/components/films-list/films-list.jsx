import React from 'react';
import FilmCard from '../film-card/film-card.jsx';
import {films} from '../../mocks/films.js';


export default function FilmsList() {
  return (
    <div className="catalog__films-list">
      {
        films.map((film) => (
          <FilmCard
            key={film.name}
            filmName={film.name}
            prevVideo={film.video}
            id={film.id}
            prevPoster={film.prevPoster}
          />))
      }
    </div>
  );
}
