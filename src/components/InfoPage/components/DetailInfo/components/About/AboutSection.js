import React from 'react';
import TableEditor from '../../../../Private/TableEditor';
import './AboutSection.scss';




const AboutSection = ({
    infoList
}) => {

    return (
        <div className='aboutContact'>
            {infoList.map((item) => (
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

export default AboutSection;