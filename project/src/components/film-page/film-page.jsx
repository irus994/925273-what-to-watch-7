import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import Tabs from '../tabs/tabs.jsx';
import {getComments, getFilms, getSimilarFilms} from '../../store/films-data/selectors';
import {connect} from 'react-redux';
import {filmPropTypes} from '../films-prop-types';
import {commentsPropTypes} from '../comments-prop-types.js';
import FilmCard from '../film-card/film-card.jsx';
import UserAuthIcon from '../user-auth-icon/user-auth-icon.jsx';
import {fetchCommentsList, fetchSimilarFilmsList, toggleFavorite} from '../../store/api-actions';
import {getUserStatus} from '../../store/user/selectors';
import {AppRoute} from '../const';
import {ActionCreator} from '../../store/action';

function FilmPage(props) {
  const {films, similarFilms, loadComments, comments, authorizationStatus, onAddFavoriteClick, onPlayFilm, loadSimilarFilms} = props;
  const [activeFilm, setActiveFilm] = useState(null);
  const {id} = useParams();
  const mainFilm = films.find((film) => film.id === Number(id));
  useEffect(() => {
    loadComments(id);
    loadSimilarFilms(id);
  }, [id, loadComments, loadSimilarFilms]);
  return (
    <>
      <section className="film-card film-card--full" style={{backgroundColor: mainFilm.color}}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={mainFilm.background} alt={mainFilm.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>
            <UserAuthIcon />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{mainFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{mainFilm.genre}</span>
                <span className="film-card__year">{mainFilm.year}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                  onClick={(evt) => {
                    evt.preventDefault();
                    onPlayFilm(mainFilm.id);
                  }}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  onClick={(evt) => {
                    evt.preventDefault();
                    onAddFavoriteClick(mainFilm.id, !mainFilm.isMyList);
                  }}
                  className="btn btn--list film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref={mainFilm.isMyList ? '#in-list' : '#add'}></use>
                  </svg>
                  <span>My list</span>
                </button>
                {
                  authorizationStatus === 'AUTH' && <Link to={`/films/${mainFilm.id}/review`} className="btn film-card__button">Add review</Link>
                }
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={mainFilm.poster} alt={mainFilm.name} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <Tabs
                film={mainFilm}
                comments={comments}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            {
              similarFilms.slice(0, 4).map((film) => (
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
    </>
  );
}

FilmPage.propTypes = {
  films: PropTypes.arrayOf(filmPropTypes).isRequired,
  loadComments: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(commentsPropTypes).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onAddFavoriteClick: PropTypes.func.isRequired,
  similarFilms: PropTypes.arrayOf(filmPropTypes).isRequired,
  onPlayFilm: PropTypes.func.isRequired,
  loadSimilarFilms: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => (
  {
    films: getFilms(state),
    comments: getComments(state),
    authorizationStatus: getUserStatus(state),
    similarFilms: getSimilarFilms(state),
  }
);


const mapDispatchToProps = (dispatch) => ({
  loadComments: (filmId) => {
    dispatch(fetchCommentsList(filmId));
  },
  onAddFavoriteClick: (filmId, status) => {
    dispatch(toggleFavorite(filmId, status));
  },
  loadSimilarFilms: (filmId) => {
    dispatch(fetchSimilarFilmsList(filmId));
  },
  onPlayFilm: (filmId) => {
    dispatch(ActionCreator.redirectToRoute(AppRoute.PLAYER.replace(':id', filmId)));
  },
});

export {FilmPage};
export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);
