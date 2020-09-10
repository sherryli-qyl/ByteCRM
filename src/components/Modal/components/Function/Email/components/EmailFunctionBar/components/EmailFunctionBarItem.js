import React from 'react';
import Text from '../../../../../../../Style/Text';



const EmailFunctionBarItem = ({
    children,

}) => (
        <div className="functionBar_Item">
            <Text className="functionBar_Item_Text"
            // onClick={() => onItemClick()}
            >
                {children}
            </Text>
        </div>

    );

export default EmailFunctionBarItem;