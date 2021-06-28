
export function adaptToClient(movie) {
  const adaptedMovie = Object.assign(
    {},
    movie,
    {
      prevPoster: movie.preview_image,
      video: movie.preview_video_link,
      year: movie.released.toString(),
      isMyList: movie.is_favorite,
      poster: movie.poster_image,
      background: movie.background_image,
    },
  );
  delete adaptedMovie.preview_image;

  return adaptedMovie;
}
