import {AppRoute} from '../components/const.js';
import {ActionCreator} from './action';
import {AuthorizationStatus, APIRoute} from '../components/const.js';
import {adaptToClient} from '../components/adapt.js';

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then((response) => response.data.map((film) => adaptToClient(film)))//запрос для получения списка фильмов
    .then((response) => dispatch(ActionCreator.loadFilms(response)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then((response) => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH, response.data)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      return data;
    })
    .then((data) => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH, data)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);
