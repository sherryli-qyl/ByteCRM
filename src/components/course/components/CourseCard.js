import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import '../styles/courseCardStyle.scss';

const CourseCard = props => {
    return (
        <Card as={Link} to={props.to} className="course-card">
            <Image src={props.courseImage} wrapped />
            <Card.Content>
                <Card.Header>{props.courseName}</Card.Header>
                <Card.Description>
                    {props.courseDescription}
                </Card.Description>
            </Card.Content>
        </Card>
    );
};

export default CourseCard;
