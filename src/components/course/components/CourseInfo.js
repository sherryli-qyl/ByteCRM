import React, { useEffect, useState } from 'react';
import { Button, Container, Divider, Image, Label, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import Header from '../../UI/header/Header';
import LecturerManagement from './LecturerManagement';
import StudentManagement from './StudentManagement';
import { COURSE_BASE_URL } from '../../routes/URLMap';
import { deleteCourseById } from '../../api/course';

const CourseInfo = props => {
    const [isDeleting, setIsDeleting] = useState(false);

    const {
        assignedLecturers = [],
        courseId,
        description,
        enrolledStudents = [],
        history,
        image,
        isLoading,
        location: { pathname: currentPath },
        name,
        reloadPage,
        setErrorState
    } = props;

    useEffect(() => {
        if (isDeleting) {
            deleteCourseById(courseId)
                .then(() => {
                    history.push(COURSE_BASE_URL);
                })
                .catch(setErrorState);
        }
        // eslint-disable-next-line
    }, [isDeleting]);

    const deleteCourse = () => {
        if (window.confirm(`Do you want to delete course ${courseId}?`)) {
            setIsDeleting(true)
        }
    };

    return (
        <Container textAlign="center">
            <Image src={image} wrapped size="medium" />
            <Header as="h3">
                {name}
            </Header>
            <Segment basic loading={isLoading}>
                <p>
                    {description}
                </p>
                <div>
                    <span>Enrolled Students: </span>
                    {enrolledStudents.map(student => <Label key={student._id}>{student.fullName}</Label>)}
                </div>
                <div>
                    <span>Assigned Lecturers: </span>
                    {assignedLecturers.map(lecturer => <Label key={lecturer._id}>{lecturer.fullName}</Label>)}
                </div>
                <StudentManagement
                    courseId={courseId}
                    reloadPage={reloadPage}
                    enrolledStudents={enrolledStudents}
                />
                <LecturerManagement
                    courseId={courseId}
                    reloadPage={reloadPage}
                    assignedLecturers={assignedLecturers}
                />
                <Divider />
                <Button as={Link} to={`${currentPath}/edit`} primary>
                    Edit
                </Button>
                <Button loading={isDeleting} onClick={deleteCourse} color="red">
                    Delete
                </Button>
            </Segment>
        </Container>
    );
};

export default withRouter(CourseInfo);
