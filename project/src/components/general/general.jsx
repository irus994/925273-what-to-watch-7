import React from 'react';
import PropTypes from 'prop-types';
import FilmsList from '../films-list/films-list.jsx';
import {filmPropTypes} from '../films-prop-types.js';
import GenreList from '../genre-list/genre-list.jsx';
import {AuthorizationStatus} from '../const.js';
import UserAuthIcon from '../user-auth-icon/user-auth-icon.jsx';
import {connect} from 'react-redux';
import {getFilms, getPromoFilms} from '../../store/films-data/selectors';
import {getUserStatus} from '../../store/user/selectors';
import {toggleFavorite} from '../../store/api-actions';

function General(props) {
  const {films, promoFilm, onAddFavoriteClick} = props;
  return (
    <>
      {promoFilm && (
        <section className="film-card">
          <div className="film-card__bg">
            <img src={promoFilm.background} alt={promoFilm.name}/>
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
                <img src={promoFilm.poster} alt={promoFilm.name} width="218" height="327"/>
              </div>

              <div className="film-card__desc">
                <h2 className="film-card__title">{promoFilm.name}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{promoFilm.genre}</span>
                  <span className="film-card__year">{promoFilm.year}</span>
                </p>
                <div className="film-card__buttons">
                  <button className="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s" />
                    </svg>
                    <span>Play</span>
                  </button>
                  <button
                    onClick={(evt) => {
                      evt.preventDefault();
                      onAddFavoriteClick(promoFilm.id, !promoFilm.isMyList);
                    }}
                    className="btn btn--list film-card__button"
                    type="button"
                  >
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref={promoFilm.isMyList ? '#in-list' : '#add'}></use>
                    </svg>
                    <span>My list</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
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
  promoFilm: filmPropTypes,
  onAddFavoriteClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => (
  {
    films: getFilms(state),
    authorizationStatus: getUserStatus(state),
    promoFilm: getPromoFilms(state),
  }
);

const mapDispatchToProps = (dispatch) => ({
  onAddFavoriteClick: (filmId, status) => {
    dispatch(toggleFavorite(filmId, status));
  },
});

export {General};
export default connect(mapStateToProps, mapDispatchToProps)(General);
