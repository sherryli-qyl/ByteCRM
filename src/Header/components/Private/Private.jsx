import React from 'react';
import NavigationLink from '../../../UI/NavigationLink';
import './Private.scss';

const Private = () => (
        <div className = "Layout">
        <NavigationLink.Button variant="secondary" href="/register">
            Register
          </NavigationLink.Button>
          <NavigationLink.Button variant="secondary" href="/login">
            Signin
          </NavigationLink.Button>
          <NavigationLink.Button variant="secondary" href="/login">
            Signout
          </NavigationLink.Button>
        </div>
    );
export default Private;
