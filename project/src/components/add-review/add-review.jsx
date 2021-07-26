import React from 'react';
import {Link, useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import AddReviewForm from '../review-form/review-form.jsx';
import {filmPropTypes} from '../films-prop-types';
import {getFilms} from '../../store/films-data/selectors';
import {connect} from 'react-redux';

function AddReview(props) {
  const {films} = props;
  const {id} = useParams();
  const mainFilm = films.find((film) => film.id === Number(id));
  return (
    <section style={{backgroundColor: mainFilm.color}} className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={mainFilm.background} alt={mainFilm.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to="#" className="breadcrumbs__link">{mainFilm.filmName}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

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

        <div className="film-card__poster film-card__poster--small">
          <img src={mainFilm.poster} alt={mainFilm.name} width="218" height="327"/>
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm/>
      </div>

    </section>
  );
}

AddReview.propTypes = {
  films: PropTypes.arrayOf(filmPropTypes).isRequired,
};

const mapStateToProps = (state) => (
  {
    films: getFilms(state),
  }
);

export {AddReview};
export default connect(mapStateToProps)(AddReview);
