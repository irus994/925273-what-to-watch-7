import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {AppRoute} from '../const.js';
import General, {isCheckedAuth} from '../general/general.jsx';
import AddReview from '../add-review/add-review.jsx';
import FilmPage from '../film-page/film-page.jsx';
import MyList from '../my-list/my-list.jsx';
import SingIn from '../sing-in/sing-in.jsx';
import Player from '../player/player.jsx';
import NotFoundScreen from '../non-found-screen/non-found-screen.jsx';
import {filmPropTypes} from '../films-prop-types.js';
import LoadingScreen from '../loading-screen/loading-screen.jsx';
import PrivateRoute from '../private-route/private-rout.jsx';
import {browserHistory} from '../browser-history.js';
import {getFavoriteFilms, getFilms, getLoadedFilmsStatus} from '../../store/films-data/selectors';
import {getUserStatus} from '../../store/user/selectors';
import OnlyUnauthorizedRoute from '../only-unauthorized-route/only-unauthorized-route';


function App(props) {
  const {authorizationStatus, isDataLoaded, favoriteFilms} = props;
  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen/>
    );
  }
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <General/>
        </Route>
        <OnlyUnauthorizedRoute
          exact
          path={AppRoute.SING_IN}
          render={() => <SingIn/>}
        >
        </OnlyUnauthorizedRoute>
        <PrivateRoute
          exact
          path={AppRoute.MY_LIST}
          render={() => <MyList films={favoriteFilms}/>}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.FILM}>
          <FilmPage/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.ADD_REVIEW}
          render={() => <AddReview/>}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.PLAYER}>
          <Player/>
        </Route>
        <Route>
          <NotFoundScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => (
  {
    films: getFilms(state),
    authorizationStatus: getUserStatus(state),
    isDataLoaded: getLoadedFilmsStatus(state),
    favoriteFilms: getFavoriteFilms(state),
  }
);


App.propTypes = {
  favoriteFilms: PropTypes.arrayOf(filmPropTypes).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

export {App};
export default connect(mapStateToProps, null)(App);

