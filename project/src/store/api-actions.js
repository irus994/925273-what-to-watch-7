import {AppRoute} from '../components/const.js';
import {ActionCreator} from './action';
import {AuthorizationStatus, APIRoute} from '../components/const.js';
import {adaptToClient} from '../components/adapt.js';

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then((response) => response.data.map((film) => adaptToClient(film)))//запрос для получения списка фильмов
    .then((response) => dispatch(ActionCreator.loadFilms(response)))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO_FILM)
    .then((response) => adaptToClient(response.data))
    .then((response) => dispatch(ActionCreator.loadPromoFilm(response.id)))
);

export const fetchFavoriteFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE_FILMS)
    .then((response) => response.data.map((film) => adaptToClient(film)))//запрос для получения списка фильмов
    .then((response) => dispatch(ActionCreator.loadFavoriteFilms(response)))
);

export const fetchSimilarFilmsList = (filmId) => (dispatch, _getState, api) => (
  api.get(APIRoute.SIMILAR_FILM.replace(':id', filmId))
    .then((response) => response.data.map((film) => adaptToClient(film)))//запрос для получения списка фильмов
    .then((response) => dispatch(ActionCreator.loadSimilarFilms(response)))
);

export const toggleFavorite = (filmId, status) => (dispatch, _getState, api) => (
  api.post(APIRoute.TOGGLE_FAVORITE_FILMS.replace(':film_id', filmId).replace(':status', Number(status)))
    .then((response) => adaptToClient(response.data))
    .then((response) => dispatch(ActionCreator.updateFilm(response)))
);

export const addComment = (filmId, userRating, commentText) => (dispatch, _getState, api) => (
  api.post(APIRoute.ADD_COMMENT.replace(':film_id', filmId), {rating: userRating, comment: commentText})
    .then((response) => response.data)
    .then((response) => dispatch(ActionCreator.addFilmComments(response)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.FILM.replace(':id', filmId))))
);

export const fetchCommentsList = (filmId) => (dispatch, _getState, api) => (
  api.get(APIRoute.COMMENTS.replace(':film_id', filmId))
    .then((response) => response.data)
    .then((response) => dispatch(ActionCreator.loadComments(response)))
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
