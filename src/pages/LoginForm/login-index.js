import React from 'react';
import Logo from './components/logo';
import LoginForm from './components/form';
import ToSignUp from './components/signUp';
import './Style/style.scss';
import Register from '../RegForm/reg-index';
import Calls from '../../calls/call';
import { Route, Switch } from 'react-router-dom';

class SignIn extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <Logo />
            <ToSignUp />
            <LoginForm />
          </Route>

          <Route path="/reg">
            <Register />
          </Route>

          <Route path="/call">
            <Calls />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default SignIn;
