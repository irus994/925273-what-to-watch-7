import {ActionType} from './action.js';
import {films} from '../mocks/films.js';

export const initialState = {
  GENRE: 'ALL_GENRE',
  FILMS_LIST: 'ALL_FILMS',
  films: films,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        GENRE: action.payload,
      };
    case ActionType.GET_FILMS_LIST:
      return {
        ...state,
        GET_FILMS_LIST: state.FILMS_LIST + action.payload,
      };
    default:
      return state;
  }
};
