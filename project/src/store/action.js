export const ActionType = {
  CHANGE_GENRE: 'films/changeGenre',
  LOAD_FILMS: 'data/loadFilms',
  LOAD_FAVORITE_FILMS: 'data/loadFavoriteFilms',
  LOAD_COMMENTS: 'data/loadComments',
  UPDATE_FILM: 'data/updateFilm',
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
  updateFilm: (film) => ({
    type: ActionType.UPDATE_FILM,
    payload: film,
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
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};
