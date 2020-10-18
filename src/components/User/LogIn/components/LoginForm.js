import React from 'react';
import axios from 'axios';
import api from '../../../../lib/api/api' ;
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      user: { email: '', password: '' },

      emailErrMsg: '',
      passwordErrMsg: '',
      hidden: true,
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //Toggle Password -> Show or Hide
  toggleShow = this.toggleShow.bind(this);
  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }

  handleEmailChange(event) {
    let value = event.target.value;
    this.setState(
      (prevState) => ({
        user: {
          ...prevState.user,
          email: value,
        },
      }),
      () => console.log(this.state.user)
    );
  }

  handlePasswordChange(event) {
    let value = event.target.value;
    this.setState(
      (prevState) => ({
        user: {
          ...prevState.user,
          password: value,
        },
      }),
      () => console.log(this.state.user)
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState({
        emailErrMsg: '',
        passwordErrMsg: '',
      });
    }
    api
      .post('/api/auth', {
        email: this.state.user.email,
        password: this.state.user.password,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          this.props.history.push('/contacts');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  validate() {
    let emailErrMsg = '';
    let passwordErrMsg = '';

    if (!this.state.user.email) {
      emailErrMsg = 'Email cannot be blank..';
    } else if (typeof this.state.user.email !== 'undefined') {
      let emailPattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );

      if (!emailPattern.test(this.state.user.email)) {
        emailErrMsg = 'Enter valid email format.';
      }
    }

    if (!this.state.user.password) {
      passwordErrMsg = 'Password cannot be blank.';
    } else if (typeof this.state.user.password !== 'undefined') {
      let passwordPattern = new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i
      );

      if (!passwordPattern.test(this.state.user.password)) {
        passwordErrMsg =
          'Minimum eight characters, at least one uppercase letter, one lowercase letter and one number';
      }
    }
    if (emailErrMsg || passwordErrMsg) {
      this.setState({
        emailErrMsg,
        passwordErrMsg,
      });
      return false;
    }

    return true;
  }

  render() {
    const { onSignIn } = this.state.user;
    return (
      <div>
        <form className="loginForm" onSubmit={this.handleSubmit}>
          <label htmlFor="email" className="laBel">
            Email address
          </label>
          <input
            className="emailInput"
            id="email"
            placeholder="Enter your email address..."
            name="email"
            type="text"
            value={this.state.user.email}
            onChange={this.handleEmailChange}
          />
          <div className="errMsg">{this.state.emailErrMsg}</div>
          <br />
          <label htmlFor="password" className="laBel">
            Password
          </label>
          <br />
          <span onClick={this.toggleShow} className="pwdReveal">
            Show/Hide password
          </span>
          <input
            className="pwdInput"
            id="password"
            type={this.state.hidden ? 'password' : 'text'}
            name="password"
            placeholder="Enter your password..."
            value={this.state.user.password}
            onChange={this.handlePasswordChange}
          />
          <br />
          <div className="errMsg">{this.state.passwordErrMsg}</div>
          <br />
          <a className="linkBtn">Forgot my password</a>
          <br />
          <input id="rememberMe" className="checkBox" type="checkbox" />
          <label htmlFor="rememberMe" className="rmbMe">
            Remember Me
          </label>
          <br />
          <button className="loginBtn" onClick={onSignIn}>
            Log in
          </button>
        </form>
      </div>
    );
  }
}
export default withRouter(LoginForm);
