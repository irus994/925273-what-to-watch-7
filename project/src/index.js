import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import rootReducer from './store/root-reducer.js';
import {ActionCreator} from './store/action';
import {AuthorizationStatus} from './components/const';
import {checkAuth, fetchFilmsList, fetchPromoFilm} from './store/api-actions';
import {redirect} from './store/middlewares/redirect';

const api = createAPI(
  () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);

store.dispatch(checkAuth());
store.dispatch(fetchFilmsList());
store.dispatch(fetchPromoFilm());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>,
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

