export const ActionType = {
  CHANGE_GENRE: 'films/changeGenre',
  GET_FILMS_LIST: 'GET_FILMS_LIST',
};

export const ActionCreator = {
  changeGenre: (newGenre) => ({  //этот объект передается в редьюсер в качестве экшена
    type: ActionType.CHANGE_GENRE,
    payload: newGenre,
  }),
};
