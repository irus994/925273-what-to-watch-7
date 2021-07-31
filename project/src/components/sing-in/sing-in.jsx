import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {login} from '../../store/api-actions';

export function SingIn ({onSubmit}) {
  const loginRef = useRef();
  const passwordRef = useRef();
  const [emailError, setEmailError] = useState('');
  const [passError, setPassError] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (loginRef.current.validity.valid) {
      setEmailError('');
    } else {
      setEmailError('Please enter a valid email address');
      return;
    }
    if (!passwordRef.current.value.match(/^[\s]*$/)) {
      setPassError('');
    } else {
      setPassError('Please enter a valid password');
      return;
    }
    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form noValidate action="#" onSubmit={handleSubmit} className="sign-in__form">
          {
            (emailError || passError) && (
              <div className="sign-in__message">
                <p>{emailError ? emailError : passError} </p>
              </div>
            )
          }
          <div className="sign-in__fields">
            <div className={emailError ? 'sign-in__field sign-in__field--error' : 'sign-in__field'}>
              <input ref={loginRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email"/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className={passError ? 'sign-in__field sign-in__field--error' : 'sign-in__field'}>
              <input ref={passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password"/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <a href="/" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

SingIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  },
});

export default connect(null, mapDispatchToProps)(SingIn);

