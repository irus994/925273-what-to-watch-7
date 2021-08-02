import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {Redirect, useParams} from 'react-router-dom';
import {filmPropTypes} from '../films-prop-types';
import {getFilms} from '../../store/films-data/selectors';
import {connect} from 'react-redux';
import {gerHoursForPlayer} from '../utils';
import {ActionCreator} from '../../store/action';
import {AppRoute} from '../const';

function Player (props) {
  const {films, onPlayFilm} = props;
  const videoRef = useRef(null);
  const {id} = useParams();
  const mainFilm = films.find((film) => film.id === Number(id));
  const runTime = videoRef.current
    ? videoRef.current.duration
    : mainFilm?.runTime * 60;
  const [remainingTime, setRemainingTime] = useState(runTime);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDataLoading, setDataLoading] = useState(false);
  if (!mainFilm && films.length > 0) {
    return (
      <Redirect to={AppRoute.PAGE_404}/>
    );
  }
  if (films.length === 0) {
    return '';
  }
  return (
    <div className="player">
      <video
        onClick={() => {
          if (videoRef.current.paused) {
            setDataLoading(true);
            videoRef.current.play().then(() => setDataLoading(false));
          } else {
            setDataLoading(false);
            videoRef.current.pause();
          }
        }}
        src={mainFilm.fullVideo}
        ref={videoRef}
        className="player__video"
        poster={mainFilm.background}
        onTimeUpdate={() => {
          setRemainingTime(videoRef.current.duration - Math.floor(videoRef.current.currentTime));
        }}
      />

      <button
        type="button"
        className="player__exit"
        onClick={(evt) => {
          evt.preventDefault();
          onPlayFilm(mainFilm.id);
        }}
      >
        Exit
      </button>
      <div className="player__controls">
        {isDataLoading && <div className="loader"></div>}
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={((1 - (remainingTime / (runTime))) * 100).toFixed(0)} max="100"></progress>
            <div className="player__toggler" style={{left: `${((1 - (remainingTime / (runTime))) * 100).toFixed(0)}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{gerHoursForPlayer(remainingTime)}</div>
        </div>

        <div className="player__controls-row">
          <button onClick={() => {
            if (videoRef.current.paused) {
              setDataLoading(true);
              videoRef.current.play().then(() => setDataLoading(false));
            } else {
              setDataLoading(false);
              videoRef.current.pause();
            }
            setIsPlaying(!isPlaying);
          }} type="button" className="player__play"
          >
            {isPlaying
              ? (
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
              )
              : (
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
              )}
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button
            onClick={(evt) => {
              evt.preventDefault();
              videoRef.current.requestFullscreen();
            }}
            type="button"
            className="player__full-screen"
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

Player.propTypes = {
  films: PropTypes.arrayOf(filmPropTypes).isRequired,
  onPlayFilm: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => (
  {
    films: getFilms(state),
  }
);

const mapDispatchToProps = (dispatch) => ({
  onPlayFilm: (filmId) => {
    dispatch(ActionCreator.redirectToRoute(AppRoute.FILM.replace(':id', filmId)));
  },
});

export {Player};
export default connect(mapStateToProps, mapDispatchToProps)(Player);

