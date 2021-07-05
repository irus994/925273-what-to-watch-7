import {NameSpace} from '../root-reducer';

export const getUserStatus = (state) => state[NameSpace.USER].user.authorizationStatus;
