import React from 'react';
import FilmCard from '../film-card/film-card.jsx';
import {films} from '../../mocks/films.js';


export default function FilmsList() {
  return (
    <div className="catalog__films-list">
      {
        films.map((i) => (
          <FilmCard
            key={films.length + i}
            filmName={films[1].name}
          />))
      }
    </div>
  );
}
