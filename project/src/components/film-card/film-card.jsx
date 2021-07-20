import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';

export default function FilmCard(props) {
  const {filmName, id, prevPoster, video, onPointerEnter, onPointerLeave, isActive} = props;
  return (
    <article onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave} className="small-film-card catalog__films-card">
      <VideoPlayer
        prevPoster={prevPoster}
        video={video}
        isActive={isActive}
      />
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}> {filmName}</Link>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  filmName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  prevPoster: PropTypes.string.isRequired,
  onPointerEnter: PropTypes.func,
  onPointerLeave: PropTypes.func,
  video: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};
