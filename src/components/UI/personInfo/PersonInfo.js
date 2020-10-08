import React from 'react';
import { Item, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { COURSE_BASE_URL } from '../../routes/URLMap';

const PersonInfo = ({
    courses,
    email,
    fullName,
    image,
}) => (
    <Item>
        <Item.Image
            size='tiny'
            src={image}
        />
        <Item.Content>
            <Item.Header>{fullName}</Item.Header>
            <Item.Extra>{email}</Item.Extra>
            <Item.Meta>Courses:</Item.Meta>
            <Item.Description>
                {
                    courses.map(course => (
                        <Label key={course} as={Link} to={`${COURSE_BASE_URL}/${course}`}>
                            {course}
                        </Label>
                    ))
                }
            </Item.Description>
        </Item.Content>
    </Item>
);

export default PersonInfo;
