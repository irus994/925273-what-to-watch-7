import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Genre(props) {
  const {name, isActive, onClick} = props;
  return(
    <li onClick={onClick} className={`${isActive ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}`}>
      <Link to="#" className="catalog__genres-link">{name}</Link>
    </li>
  );
}

Genre.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
