import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {timeoutInterval} from '../const.js';

export default function VideoPlayer(props) {
  const {prevPoster, video, isActive} = props;

  const videoRef = useRef(null);
  const playTimeoutRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      playTimeoutRef.current = setTimeout(() => {
        videoRef.current.play();
      }, timeoutInterval);
      return;
    }
    clearTimeout(playTimeoutRef.current);
    videoRef.current.load();
  }, [isActive]);

  return (
    <div className="small-film-card__image">
      <video muted src={`${video}`} ref={videoRef} poster={`/img/${prevPoster}`} width="280" height="175"/>
    </div>
  );
}

VideoPlayer.propTypes = {
  prevPoster: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};
