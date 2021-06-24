import PropTypes from 'prop-types';

export const genrePropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
}).isRequired;
