import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AppRoute} from '../const';

export function UserAuthIcon(props) {
  const {authorizationStatus, email} = props;
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63"/>
        </div>
      </li>
      <li className="user-block__item">
        <Link to={authorizationStatus === 'AUTH' ? `mailto:${email}` : AppRoute.SING_IN} className="user-block__link">{authorizationStatus === 'AUTH' ? email : 'Sign In'}</Link>
      </li>
    </ul>
  );
}

UserAuthIcon.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => (
  {
    authorizationStatus: state.authorizationStatus,
    email: state.userData ? state.userData.email : undefined,
  }
);

export default connect(mapStateToProps, null)(UserAuthIcon);
