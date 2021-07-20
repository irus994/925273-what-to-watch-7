import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import FilmCard from '../film-card/film-card';
import PropTypes from 'prop-types';
import {filmPropTypes} from '../films-prop-types';
import {getFavoriteFilms} from '../../store/films-data/selectors';
import {connect} from 'react-redux';
import {fetchFavoriteFilmsList} from '../../store/api-actions';

function MyList (props) {
  const {films, loadFavoriteFilms} = props;
  const [activeFilm, setActiveFilm] = useState(null);
  useEffect(() => {
    loadFavoriteFilms();
  }, [loadFavoriteFilms]);
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {
            films.map((film) => (
              <FilmCard
                onPointerEnter={() => {
                  setActiveFilm(film);
                }}
                onPointerLeave={() => {
                  setActiveFilm(null);
                }}
                key={film.id}
                filmName={film.name}
                id={film.id}
                prevPoster={film.prevPoster}
                video={film.video}
                isActive={activeFilm === film}
              />))
          }
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <Link to="/" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

MyList.propTypes = {
  films: PropTypes.arrayOf(filmPropTypes).isRequired,
  loadFavoriteFilms: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => (
  {
    films: getFavoriteFilms(state),
  }
);

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteFilms: () => {
    dispatch(fetchFavoriteFilmsList());
  },
});


export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
