import PropTypes from 'prop-types';

export const commentsPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
}).isRequired;
