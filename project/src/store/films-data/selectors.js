import {NameSpace} from '../root-reducer';

export const getFilms = (state) => state[NameSpace.DATA].films.data;
export const getLoadedFilmsStatus = (state) => state[NameSpace.DATA].films.isDataLoaded;
export const getComments = (state) => state[NameSpace.DATA].comments.data;
export const getFavoriteFilms = (state) => state[NameSpace.DATA].isMyList.data;
export const getSimilarFilms = (state) => state[NameSpace.DATA].isSimilar.data;
export const getPromoFilms = (state) => getFilms(state).find((film) => film.id === state[NameSpace.DATA].promoFilm.data);

