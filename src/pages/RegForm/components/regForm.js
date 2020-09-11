import React from 'react';
import GoogleIcon from '../../../img/googleIcon.svg';
import { Link } from 'react-router-dom';

export default class RegisterForm extends React.Component {
  render() {
    return (
      <div className="reg-formContainer">
        <form className="regForm" action="">
          <p className="asking">
            Have an account?&nbsp;
            <Link className="reg-signInLink" to="/">
              Sign in
            </Link>
          </p>
          <h3>Create your free account</h3>
          <span className="slogan">Free forever. No credit card needed</span>
          <div className="googleSignUpWrapper">
            <img className="googleIcon" src={GoogleIcon} alt="" />
            <button className="googleSignUpBtn">Sign up with google</button>
          </div>
          <hr />
          <label className="reg-inputLabel" for="">
            First Name
          </label>
          <br />
          <input className="reg-firstNameInput" type="text" />
          <br />
          <label className="reg-inputLabel" for="">
            Last Name
          </label>
          <br />
          <input className="reg-lastNameInput" type="text" />
          <br />
          <label className="reg-inputLabel" for="">
            Email address
          </label>
          <br />
          <input className="reg-emailInput" type="email" />
          <br />
          <label className="reg-inputLabel" for="">
            Password
          </label>
          <br />
          <input className="reg-pwdInput" type="password" />
          <br />
          <button className="reg-submitBtn" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}
