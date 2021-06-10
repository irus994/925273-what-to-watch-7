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
// import PropTypes from 'prop-types';
import {films} from '../../mocks/films.js';

export default function App() {
  // const {filmName, genre, year} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <General
            filmName={films[0].name}
            genre={films[0].genre}
            year={films[0].year}
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

// App.propTypes = {
//   filmName: PropTypes.string.isRequired,
//   genre: PropTypes.string.isRequired,
//   year: PropTypes.number.isRequired,
// };


