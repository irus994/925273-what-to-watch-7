import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {timeoutInterval} from '../const.js';

export default function VideoPlayer(props) {
  const {prevPoster, video, isActive} = props;

  const videoRef = useRef(null);

  useEffect(() => {
    const videoCard = videoRef.current;
    let timeoutId;
    if (isActive) {
      timeoutId = setTimeout(() => videoCard.play(), timeoutInterval);
    } else {
      clearTimeout(timeoutId);
      videoCard.load();
    }

    return () => clearTimeout(timeoutId);
  }, [isActive]);

  return (
    <div className="small-film-card__image">
      <video muted src={video} ref={videoRef} poster={prevPoster} width="280" height="175"/>
    </div>
  );
}

VideoPlayer.propTypes = {
  prevPoster: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};
