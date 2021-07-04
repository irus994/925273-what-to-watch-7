import {ActionType} from '../action.js';

export const initialState = {
  films: {
    data: [],
    isDataLoaded: false,
  },
};

export const filmData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: {
          data: action.payload,
          isDataLoaded: true,
        },
      };
    default:
      return state;
  }
};
