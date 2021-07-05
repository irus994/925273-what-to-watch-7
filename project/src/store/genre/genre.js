import {ActionType} from '../action.js';
import {GENRE_DEFAULT} from '../../components/const.js';

export const initialState = {
  genre:  GENRE_DEFAULT,
};

export const genre = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload,
      };
    default:
      return state;
  }
};
