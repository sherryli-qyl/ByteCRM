import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ContactList from '../components/Contact/ContactList';
import ContactMain from '../components/Contact/ContactMain';
import CompanyList from '../components/Company/CompanyList';
import CompanyMain from '../components/Company/CompanyMain';
import RegForm from '../components/Log/RegForm/Register';
import Login from '../components/Log/LogIn/LogIn';
import About from '../AboutUs/AboutUs';
import Contactus from '../ContactUs/ContactUs';
import
{COMPANY_BASE_URL,
  CONTACT_BASE_URL,
  LOGIN_BASE_URL,
  REG_BASE_URL,
  LOGOUT_BASE_URL,
  ABOUTUS_BASE_URL,
  CONTACTUS_BASE_URL
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
      <Route exact path={ABOUTUS_BASE_URL} component={About} />
      <Route exact path={CONTACTUS_BASE_URL} component={Contactus} />


    </Switch>
  )
}

export default Routes;
