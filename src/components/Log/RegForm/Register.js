import React from 'react';
import RegLogo from './components/logo';
import RegForm from './components/regForm';
import { Route, Switch } from 'react-router-dom';
import LogInPage from '../LoginForm/Login';
import './Style/style.scss';

export default class RegiForm extends React.Component {
  render() {
    return (
      <div>
        <RegLogo />
        <RegForm />

        <Switch>
          <Route exact path="/">
            <LogInPage />
          </Route>
        </Switch>
      </div>
    );
  }
}
