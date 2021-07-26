import {ActionType} from '../action.js';
import {AuthorizationStatus} from '../../components/const.js';

export const initialState = {
  user: {
    data: null,
    authorizationStatus: AuthorizationStatus.UNKNOWN,
  },
};

export const user = (state = initialState, action) => {
  switch (action.type) {
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
        user: {
          authorizationStatus: AuthorizationStatus.NO_AUTH,
          data: null,
        },
      };
    }
    default:
      return state;
  }
};
