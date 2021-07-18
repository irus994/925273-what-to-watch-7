import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import FilmsList from '../films-list/films-list.jsx';
import {filmPropTypes} from '../films-prop-types.js';
import GenreList from '../genre-list/genre-list.jsx';
import {AuthorizationStatus} from '../const.js';
import UserAuthIcon from '../user-auth-icon/user-auth-icon.jsx';

export default function General(props) {
  const {films, topFilm} = props;
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={topFilm.background} alt={topFilm.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <UserAuthIcon/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={topFilm.poster} alt={topFilm.name} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{topFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{topFilm.genre}</span>
                <span className="film-card__year">{topFilm.year}</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList
            films={films}
          />
          <FilmsList
            films={films}
          />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export const isCheckedAuth = (authorizationStatus) =>
  authorizationStatus === AuthorizationStatus.UNKNOWN;

General.propTypes = {
  films: PropTypes.arrayOf(filmPropTypes).isRequired,
  topFilm: filmPropTypes,
};

