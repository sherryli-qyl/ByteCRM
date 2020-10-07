import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
      hidden: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //Toggle Password -> Show or Hide
  toggleShow = this.toggleShow.bind(this);
  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      console.log(this.state);

      let input = {};
      input['password'] = '';
      input['email'] = '';
      this.setState({ input: input });
    }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input['email']) {
      isValid = false;
      errors['email'] = 'Please enter your email Address.';
    }

    if (typeof input['email'] !== 'undefined') {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input['email'])) {
        isValid = false;
        errors['email'] = 'Please enter valid email address.';
      }
    }

    if (!input['password']) {
      isValid = false;
      errors['password'] = 'Please enter your password.';
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  render() {
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
            value={this.state.input.email}
            onChange={this.handleChange}
          />
          <div className="errMsg">{this.state.errors.email}</div>
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
            value={this.state.input.password}
            onChange={this.handleChange}
          />
          <br />
          <div className="errMsg">{this.state.errors.password}</div>
          <br />
          <a className="linkBtn">Forgot my password</a>
          <input id="rememberMe" className="checkBox" type="checkbox" />
          <label htmlFor="rememberMe" className="rmbMe">
            Remember Me
          </label>
          <br />
          <button className="loginBtn" type="submit">
            Log in
          </button>
        </form>
      </div>
    );
  }
}
export default LoginForm;
