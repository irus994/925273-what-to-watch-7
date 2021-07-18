import React from 'react';
import PropTypes from 'prop-types';

export default function ShowMoreButton(props) {
  const {onClick} = props;
  return (
    <div onClick={onClick} className="catalog__more">
      <button className="catalog__button" type="button">Show more</button>
    </div>
  );
}

ShowMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
