import React from 'react';
import CRMLogo from './components/CRMLogo';
import LoginForm from './components/LoginForm';
import ToSignUpPage from './components/ToSignUpPage';
import './Style/style.scss';
import { Route, Switch } from 'react-router-dom';

class LogIn extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/login">
            <CRMLogo />
            <ToSignUpPage />
            <LoginForm />
          </Route>

          {/* <Route path="/call">
            <Calls />
          </Route>*/}
        </Switch>
      </div>
    );
  }
}

export default LogIn;
