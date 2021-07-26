export const ActionType = {
  CHANGE_GENRE: 'films/changeGenre',
  LOAD_FILMS: 'data/loadFilms',
  LOAD_SIMILAR_FILMS: 'data/loadSimilarFilms',
  LOAD_FAVORITE_FILMS: 'data/loadFavoriteFilms',
  LOAD_COMMENTS: 'data/loadComments',
  ADD_FILM_COMMENTS: 'data/addFilmComments',
  UPDATE_FILM: 'data/updateFilm',
  UPDATE_PROMO_FILM: 'data/promoFilm',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'films/redirectToRoute',
};

export const ActionCreator = {
  changeGenre: (newGenre) => ({  //этот объект передается в редьюсер в качестве экшена
    type: ActionType.CHANGE_GENRE,
    payload: newGenre,
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  loadFavoriteFilms: (favoriteFilms) => ({
    type: ActionType.LOAD_FAVORITE_FILMS,
    payload: favoriteFilms,
  }),
  loadSimilarFilms: (similarFilms) => ({
    type: ActionType.LOAD_SIMILAR_FILMS,
    payload: similarFilms,
  }),
  updateFilm: (film) => ({
    type: ActionType.UPDATE_FILM,
    payload: film,
  }),
  loadPromoFilm: (promoFilm) => ({
    type: ActionType.UPDATE_PROMO_FILM,
    payload: promoFilm,
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),
  requireAuthorization: (status, userData) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: {status, userData},
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  addFilmComments: (comment) => ({
    type: ActionType.ADD_FILM_COMMENTS,
    payload: comment,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};
