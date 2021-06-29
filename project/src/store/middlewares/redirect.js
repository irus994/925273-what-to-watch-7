import {browserHistory} from '../../components/browser-history.js';
import {ActionType} from '../action';

export const redirect = (_store) => (next) => (action) => {
  // eslint-disable-next-line no-console
  console.log(action);
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  return next(action);
};
