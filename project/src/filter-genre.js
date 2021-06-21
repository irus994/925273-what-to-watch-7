
export const isSelectedGenre = (movies, genre) => {
  if (genre === 'ALL_GENRE') {
    return movies;
  }
  return  movies.filter((movie) => movie.genre === genre);
};
