import PropTypes from 'prop-types';

export const filmPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  prevPoster: PropTypes.string.isRequired,
  isMyList: PropTypes.bool.isRequired,
});
