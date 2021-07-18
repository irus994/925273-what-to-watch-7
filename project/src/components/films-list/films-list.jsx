import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card.jsx';
import {filmPropTypes} from '../films-prop-types.js';
import {isSelectedGenre} from '../../filter-genre.js';
import {getFilms} from '../../store/films-data/selectors.js';
import {getFilmGenre} from '../../store/genre/selectors.js';
import ShowMoreButton from '../show-more-button/show-more-button';

const PAGE_SIZE = 8;

function FilmsList(props) {
  const [activeFilm, setActiveFilm] = useState(null);
  const [showedFilmsCount, setShowedFilmsCount] = useState(PAGE_SIZE);
  const {films} = props;
  return (
    <>
      <div className="catalog__films-list">
        {
          films.slice(0, showedFilmsCount).map((film) => (
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
      {
        films.length > showedFilmsCount && (
          <ShowMoreButton
            onClick={(evt) => {
              evt.preventDefault();
              setShowedFilmsCount(showedFilmsCount + PAGE_SIZE);
            }}
          />
        )
      }
    </>
  );
}

const mapStateToProps = (state) => (
  {
    films: isSelectedGenre(getFilms(state), getFilmGenre(state)),
  }
);

FilmsList.propTypes = {
  films: PropTypes.arrayOf(filmPropTypes).isRequired,
};

export {FilmsList};
export default connect(mapStateToProps)(FilmsList);
