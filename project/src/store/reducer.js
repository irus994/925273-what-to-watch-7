import {ActionType} from './action.js';
import {AuthorizationStatus, GENRE_DEFAULT} from '../components/const.js';

export const initialState = {
  films: {
    data: [],
    isDataLoaded: false,
  },
  genre:  GENRE_DEFAULT,
  user: {
    data: null,
    authorizationStatus: AuthorizationStatus.UNKNOWN,
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload,
      };
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: {
          data: action.payload,
          isDataLoaded: true,
        },
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        user: {
          authorizationStatus: action.payload.status,
          data: action.payload.userData,
        },
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
