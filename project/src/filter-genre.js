
export const isSelectedGenre = (movies, genre) => {
  if (genre === 'All genre') {
    return movies;
  }
  return  movies.filter((movie) => movie.genre === genre);
};
