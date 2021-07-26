
export function adaptToClient(movie) {
  const adaptedMovie = Object.assign(
    {},
    movie,
    {
      prevPoster: movie.preview_image,
      video: movie.preview_video_link,
      fullVideo: movie.video_link,
      year: movie.released.toString(),
      isMyList: movie.is_favorite,
      poster: movie.poster_image,
      background: movie.background_image,
      runTime: movie.run_time,
      scoresCount: movie.scores_count,
      color: movie.background_color,
    },
  );
  delete adaptedMovie.preview_image;

  return adaptedMovie;
}
