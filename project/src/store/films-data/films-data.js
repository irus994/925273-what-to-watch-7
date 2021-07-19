import {ActionType} from '../action.js';

export const initialState = {
  films: {
    data: [],
    isDataLoaded: false,
  },
  isMyList: {
    data: [],
    isDataLoaded: false,
  },
  comments: {
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
    case ActionType.UPDATE_FILM: {
      return {
        ...state,
        films: {
          data: state.films.data.map((film) => {
            if (action.payload.id === film.id) {
              return action.payload;
            }
            return film;
          }),
          isDataLoaded: true,
        },
      };
    }
    case ActionType.LOAD_FAVORITE_FILMS: {
      return {
        ...state,
        isMyList: {
          data: action.payload,
          isDataLoaded: true,
        },
      };
    }
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: {
          data: action.payload,
          isDataLoaded: true,
        },
      };
    default:
      return state;
  }
};
