import React from 'react';
import TableEditor from '../../../../Private/TableEditor';
import './AboutContact.scss';




const AboutContact = ({
   contactInfoList
}) => {

    return (
        <div className='aboutContact'>
            {contactInfoList.map((item) => (
                <TableEditor
                    key={item.key}
                    itemKey={item.key}
                    title={item.title}
                    value={item.value}
                />
            ))}
        </div>
    )
}

export default AboutContact;