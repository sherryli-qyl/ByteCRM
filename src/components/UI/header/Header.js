import React from 'react';
import { Header as HeaderComponent } from 'semantic-ui-react';

const Header = props => {
    return (
        <HeaderComponent {...props}>
            {props.children}
        </HeaderComponent>
    );
};

export default Header;
