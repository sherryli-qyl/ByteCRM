import React from 'react';
import {
  Redirect, Route, Switch, BrowserRouter,
} from 'react-router-dom';
import ContactList from '../Contact/ContactList';
import ContactMain from '../Contact/ContactMain';
import CompanyList from '../Company/CompanyList';
import CompanyMain from '../Company/CompanyMain';
import RegForm from '../User/RegForm/Register';
import Login from '../User/LogIn/LogIn';
import About from '../AboutUs/AboutUs.js';
import Contactus from '../ContactUs/ContactUs';
import history from './components/History';
import ProtectedRoute from './components/ProtectedRoute';
import {
  COMPANY_BASE_URL,
  CONTACT_BASE_URL,
  LOGIN_URL,
  REG_BASE_URL,
  ABOUTUS_BASE_URL,
  CONTACTUS_BASE_URL,
} from './URLMap';

const Routes = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Redirect exact from="/" to={CONTACT_BASE_URL} />
      <Route exact path={LOGIN_URL} component={Login} />
      <Route exact path={REG_BASE_URL} component={RegForm} />
      <ProtectedRoute exact path={CONTACT_BASE_URL} component={ContactList} />
      <ProtectedRoute exact path={`${CONTACT_BASE_URL}/:id`} component={ContactMain} />
      <ProtectedRoute exact path={COMPANY_BASE_URL} component={CompanyList} />
      <ProtectedRoute exact path={`${COMPANY_BASE_URL}/main`} component={CompanyMain} />
      <Route exact path={ABOUTUS_BASE_URL} component={About} />
      <Route exact path={CONTACTUS_BASE_URL} component={Contactus} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
