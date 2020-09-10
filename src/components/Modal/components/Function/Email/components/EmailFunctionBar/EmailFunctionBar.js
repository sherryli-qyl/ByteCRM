import React from 'react';
import Text from '../../../../../../Style/Text'
import "./EmailFunctionBar.scss"
import EmailFunctionBarItem from './components/EmailFunctionBarItem'



const EmailFunctionBar = ({
    items,
    onItemClick,
}) => (
        <nav className="emailFunctionBar border-bottom">
            {items.map((item) => (
                <EmailFunctionBarItem
                    key={item.key}
                >
                    {item.value}
                </EmailFunctionBarItem>
            ))}
        </nav>
    );

export default EmailFunctionBar;
