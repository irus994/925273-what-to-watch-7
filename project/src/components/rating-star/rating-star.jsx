import React from 'react';
import PropTypes from 'prop-types';

export default function RatingStar(props) {
  const {count, checked, onChange, disabled} = props;
  return (
    <>
      <input className="rating__input" required disabled={disabled} onChange={onChange} checked={checked} id={`star-${count}`} type="radio" name="rating" value={count}/>
      <label className="rating__label" htmlFor={`star-${count}`}>Rating{count}</label>
    </>
  );
}

RatingStar.propTypes = {
  count: PropTypes.number.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};
