import {NameSpace} from '../root-reducer';

export const getFilmGenre = (state) => state[NameSpace.GENRE].genre;
