import React from 'react';
import NavigationLink from '../../../NavigationLink';
import './Private.scss';

const Private = () => (
        <div className = "Layout">
        <NavigationLink.Button variant="secondary" href="/contactus">
        CONTACT US
          </NavigationLink.Button>
          
          <NavigationLink.Button variant="secondary" href="/register">
          REGISTER
          </NavigationLink.Button>
          <NavigationLink.Button variant="secondary" href="/login">
          SIGN OUT
          </NavigationLink.Button>
        </div>
    );
export default Private;
