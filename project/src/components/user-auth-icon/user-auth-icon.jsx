import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AppRoute} from '../const';
import {getUser, getUserStatus} from '../../store/user/selectors';
import {logout as logoutAction} from '../../store/api-actions';

export function UserAuthIcon(props) {
  const {authorizationStatus, logout} = props;
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={AppRoute.MY_LIST}>
            <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63"/>
          </Link>
        </div>
      </li>
      <li className="user-block__item">
        {authorizationStatus === 'AUTH'
          ? (<a onClick={() => logout()} className="user-block__link">Sign Out</a>)
          : (<Link to={AppRoute.SING_IN} className="user-block__link">Sign In</Link>)}
      </li>
    </ul>
  );
}

UserAuthIcon.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => (
  {
    authorizationStatus: getUserStatus(state),
    email: getUser(state) ? getUser(state).email : undefined,
  }
);

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logoutAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserAuthIcon);

