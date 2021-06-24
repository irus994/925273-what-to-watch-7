import React from 'react';
import General from '../general/general.jsx';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../const.js';
import AddReview from '../add-review/add-review.jsx';
import FilmPage from '../film-page/film-page.jsx';
import MyList from '../my-list/my-list.jsx';
import SingIn from '../sing-in/sing-in.jsx';
import Player from '../player/player.jsx';
import NotFoundScreen from '../non-found-screen/non-found-screen.jsx';
import PropTypes from 'prop-types';
import {filmPropTypes} from '../films-prop-types.js';
import {connect} from 'react-redux';

function App(props) {
  const {films} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <General
            topFilm={films[0]}
            films={films}
          />
        </Route>
        <Route exact path={AppRoute.SING_IN}>
          <SingIn/>
        </Route>
        <Route exact path={AppRoute.MY_LIST}>
          <MyList/>
        </Route>
        <Route exact path={AppRoute.FILM}>
          <FilmPage
            filmName={films[0].name}
            genre={films[0].genre}
            year={films[0].year}
            id={films[0].id}
          />
        </Route>
        <Route exact path={AppRoute.ADD_REVIEW}>
          <AddReview
            filmName={films[0].name}
          />
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <Player
            prevVideo={films[0].video}
          />
        </Route>
        <Route>
          <NotFoundScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  films: PropTypes.arrayOf(filmPropTypes).isRequired,
};

const mapStateToProps = (state) => (
  {
    films: state.films,
  }
);

export {App};
export default connect(mapStateToProps, null)(App);
