
export const AppRoute = {
  ROOT: '/',
  SING_IN: '/login',
  MY_LIST: '/mylist',
  FILM: '/films/:id',
  ADD_REVIEW: '/films/:id/review',
  PLAYER: '/player/:id',
  DEV_ARTIST: '/dev-artist',
  DEV_GENRE: '/dev-genre',
};

export const GENRE_DEFAULT = 'All genre';
export const starsReview = [10,9,8,7,6,5,4,3,2,1];
export const timeoutInterval = 1000;

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoute = {
  LOGIN: '/login',
  LOGOUT: '/logout',
  FILMS: '/films',
  PROMO_FILM: '/promo',
  SIMILAR_FILM: '/films/:id/similar',
  FAVORITE_FILMS: '/favorite',
  TOGGLE_FAVORITE_FILMS: 'favorite/:film_id/:status',
  COMMENTS: '/comments/:film_id',
  ADD_COMMENT: '/comments/:film_id',
};

export const tabs = {
  OVERVIEW: 'OVERVIEW',
  DETAILS: 'DETAILS',
  REVIEWS: 'REVIEWS',
};
