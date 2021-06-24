import {ActionType} from './action.js';
import {films} from '../mocks/films.js';
import {GENRE_DEFAULT} from '../components/const.js';

export const initialState = {
  genre:  GENRE_DEFAULT,
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
