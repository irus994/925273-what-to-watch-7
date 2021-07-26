import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';
import {filmPropTypes} from '../films-prop-types';
import {getFilms} from '../../store/films-data/selectors';
import {connect} from 'react-redux';
import {gerHoursForPlayer} from '../utils';

function Player (props) {
  const {films} = props;
  const videoRef = useRef(null);
  const {id} = useParams();
  const mainFilm = films.find((film) => film.id === Number(id));
  const [remainingTime, setRemainingTime] = useState(mainFilm.runTime * 60);
  return (
    <div className="player">
      <video
        onClick={() => videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause()} src={mainFilm.fullVideo}
        ref={videoRef}
        className="player__video"
        poster={mainFilm.background}
        onTimeUpdate={() => {
          setRemainingTime(mainFilm.runTime * 60 - Math.floor(videoRef.current.currentTime));
        }}
      />

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={((1 - (remainingTime / (mainFilm.runTime * 60))) * 100).toFixed(0)} max="100"></progress>
            <div className="player__toggler" style={{left: `${((1 - (remainingTime / (mainFilm.runTime * 60))) * 100).toFixed(0)}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{gerHoursForPlayer(remainingTime)}</div>
        </div>

        <div className="player__controls-row">
          <button onClick={() => videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause()} type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
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
};

const mapStateToProps = (state) => (
  {
    films: getFilms(state),
  }
);

export {Player};
export default connect(mapStateToProps)(Player);

