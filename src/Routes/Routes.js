import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ContactList from '../components/Contact/ContactList';
import ContactMain from '../components/Contact/ContactMain';
import CompanyList from '../components/Company/CompanyList';
import CompanyMain from '../components/Company/CompanyMain';
import Logout from '../Log/LogIn/LogIn';
import RegForm from '../Log/RegForm/Register';
import Login from '../Log/LogIn/LogIn';
import {
  COMPANY_BASE_URL,
  CONTACT_BASE_URL,
  LOGIN_BASE_URL,
  REG_BASE_URL,
  LOGOUT_BASE_URL,
} from './URLMap';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to={CONTACT_BASE_URL} />
      <Route exact path={LOGIN_BASE_URL} component={Login} />
      <Route exact path={REG_BASE_URL} component={RegForm} />
      <Route exact path={LOGOUT_BASE_URL} component={Login} />
      <Route exact path={CONTACT_BASE_URL} component={ContactList} />
      <Route exact path={`${CONTACT_BASE_URL}/:id`} component={ContactMain} />
      <Route exact path={COMPANY_BASE_URL} component={CompanyList} />
      <Route exact path={`${COMPANY_BASE_URL}/main`} component={CompanyMain} />
    </Switch>
  )
}

export default Routes;
