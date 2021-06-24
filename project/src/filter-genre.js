import {GENRE_DEFAULT} from './components/const.js';

export const isSelectedGenre = (movies, genre) => {
  if (genre === GENRE_DEFAULT) {
    return movies;
  }
  return  movies.filter((movie) => movie.genre === genre);
};
