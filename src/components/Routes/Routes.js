import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import ContactList from '../Contactlist/Contactlist';
import ContactMain from '../Contactbasic/components/contactmain/ContactMain';
import CompanyList from '../companylist/CompanyList';
import Logout from '../Log/logout';
import RegForm from '../Log/SignUp';


const Routes = () => (
   <Switch>
        <Redirect exact from="/" to ="/register" />
        <Route exact path="/contacts" component={ContactList} />
        <Route exact path="/contacts/main" component={ContactMain} />
        <Route exact path="/companies" component={CompanyList} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/register" component={RegForm} />
    </Switch>
   );

export default Routes;