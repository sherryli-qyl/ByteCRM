import React from 'react';
import { Redirect, Route, Switch, BrowserRouter} from 'react-router-dom';
import ContactList from '../Contact/ContactList';
import ContactMain from '../Contact/ContactMain';
import CompanyList from '../Company/CompanyList';
import CompanyMain from '../Company/CompanyMain';
import RegForm from '../User/RegForm/Register';
import Login from '../User/LogIn/LogIn';
import About from '../AboutUs/AboutUs';
import Contactus from '../ContactUs/ContactUs';
import Test from '../Test';
import Test2 from '../Test2/Test2';
import Course from '../Test2/Test2';
// import Route from './components/Route';
import
{ 
  COMPANY_BASE_URL,
  CONTACT_BASE_URL,
  LOGIN_BASE_URL,
  REG_BASE_URL,
  LOGOUT_BASE_URL,
  ABOUTUS_BASE_URL,
  CONTACTUS_BASE_URL,
  TEST_BASE_URL,
  TEST2_BASE_URL,
  COURSE_BASE_URL
} from './URLMap';

const Routes = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Redirect exact from="/" to={CONTACT_BASE_URL} />
      <Route exact path={LOGIN_BASE_URL} component={Login} />
      <Route exact path={REG_BASE_URL} component={RegForm} />
      <Route exact path={LOGOUT_BASE_URL} component={Login} />
      {/* <ProtectedRoute exact path={CONTACT_BASE_URL} component={ContactList} /> */}
      <Route exact path={CONTACT_BASE_URL} component={ContactList} />
      <Route exact path={`${CONTACT_BASE_URL}/:id`} component={ContactMain} />
      <Route exact path={COMPANY_BASE_URL} component={CompanyList} />
      <Route exact path={`${COMPANY_BASE_URL}/main`} component={CompanyMain} />
      <Route exact path={ABOUTUS_BASE_URL} component={About} />
      <Route exact path={CONTACTUS_BASE_URL} component={Contactus} />
      <Route exact path={TEST_BASE_URL} component={Test} />
      <Route exact path={TEST2_BASE_URL} component={Test2} />
      <Route exact path={COURSE_BASE_URL} component={Course} />
    </Switch>
    </BrowserRouter>
  )
}

export default Routes;
