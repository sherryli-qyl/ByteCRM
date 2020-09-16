import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ContactList from '../Contact/ContactList';
import ContactMain from '../Contact/ContactMain';
import CompanyList from '../Company/CompanyList';
import CompanyMain from '../Company/CompanyMain';
import Logout from '../Log/RegForm/Register';
import RegForm from '../Log/RegForm/Register';
import LoginForm from '../Log/LoginForm/Login';

const Routes = () => (
  <Switch>
    <Redirect exact from="/" to="/register" />
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/contacts" component={ContactList} />
    <Route exact path="/contacts/main" component={ContactMain} />
    <Route exact path="/companies" component={CompanyList} />
    <Route exact path="/companies/main" component={CompanyMain} />
    <Route exact path="/logout" component={Logout} />
    <Route exact path="/register" component={RegForm} />
  </Switch>
);

export default Routes;
