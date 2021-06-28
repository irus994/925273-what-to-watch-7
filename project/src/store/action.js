export const ActionType = {
  CHANGE_GENRE: 'films/changeGenre',
  GET_FILMS_LIST: 'GET_FILMS_LIST',
  LOAD_FILMS: 'data/loadFilms',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
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
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};
