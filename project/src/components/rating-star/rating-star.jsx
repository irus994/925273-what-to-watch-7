import React from 'react';
import PropTypes from 'prop-types';

export default function RatingStar(props) {
  const {count} = props;
  return (
    <>
      <input className="rating__input" id={`star-${count}`} type="radio" name="rating" value={count}/>
      <label className="rating__label" htmlFor={`star-${count}`}>Rating{count}</label>
    </>
  );
}

RatingStar.propTypes = {
  count: PropTypes.string.isRequired,
};
