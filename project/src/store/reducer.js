import {ActionType} from './action.js';
// import {films} from '../mocks/films.js';
import {AuthorizationStatus, GENRE_DEFAULT} from '../components/const.js';

export const initialState = {
  genre:  GENRE_DEFAULT,
  films: [],
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
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
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
        isDataLoaded: true,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT: {
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    }
    default:
      return state;
  }
};
