import {combineReducers} from 'redux';
import {filmData} from './films-data/films-data.js';
import {user} from './user/user.js';
import {genre} from './genre/genre.js';

export const NameSpace = {
  DATA: 'DATA',
  USER: 'USER',
  GENRE: 'GENRE',
};

export default combineReducers({
  [NameSpace.DATA]: filmData,
  [NameSpace.USER]: user,
  [NameSpace.GENRE]: genre,
});
