import {NameSpace} from '../root-reducer';

export const getFilms = (state) => state[NameSpace.DATA].films.data;
export const getLoadedFilmsStatus = (state) => state[NameSpace.DATA].films.isDataLoaded;
export const getComments = (state) => state[NameSpace.DATA].comments.data;
