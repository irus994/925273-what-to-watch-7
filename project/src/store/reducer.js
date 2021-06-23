import {ActionType} from './action.js';
import {films} from '../mocks/films.js';

export const initialState = {
  genre: 'All genre',
  films: films,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload,
      };
    case ActionType.GET_FILMS_LIST:
      return {
        ...state,
        GET_FILMS_LIST: state.films,
      };
    default:
      return state;
  }
};
