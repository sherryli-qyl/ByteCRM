import React from 'react';
import { Button, Container, Pagination, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import CourseCard from './components/CourseCard';
import ErrorMessage from '../UI/errorMessage/ErrorMessage';
import FlexContainer from '../UI/flexContainer/FlexContainer';
import Header from '../UI/header/Header';
import { COURSE_BASE_URL } from '../Routes/URLMap';
import { fetchCourses } from '../Api/course';

class Courses extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: [],
            error: null,
            isLoading: false,
            pagination: {},
        };
    }

    componentDidMount() {
        this.loadCourses();
    }

    loadCourses = (pageNum, pageSize) => {
        this.setState({ isLoading: true, courses: [] }, () => {
            fetchCourses(pageNum, pageSize)
                .then(this.updateCourseData)
                .catch(error => this.setState({ error }));
        });
    }

    updateCourseData = courseData => {
        this.setState({
            courses: courseData.courses,
            isLoading: false,
            pagination: courseData.pagination,
        })
    }

    handlePageChange = (event, data) => {
        this.loadCourses(data.activePage);
    }

    render() {
        const currentPath = this.props.location.pathname;

        return (
            <React.Fragment>
                <ErrorMessage error={this.state.error} />
                <Header as="h2" textAlign="center">
                    Courses
                </Header>
                <Container>
                    <Button as={Link} to={`${currentPath}/new`} primary>
                        Create New Course
                    </Button>
                    <Segment basic loading={this.state.isLoading}>
                    <FlexContainer justifyContentValue="space-between">
                        {this.state.courses.map(course => (
                            <CourseCard
                                courseDescription={course.description}
                                courseImage={course.image}
                                courseName={course.name}
                                key={course.code}
                                to={`${COURSE_BASE_URL}/${course.code}`}
                            />
                        ))}
                    </FlexContainer>
                    </Segment>
                    {
                        this.state.pagination.page && (
                            <FlexContainer justifyContentValue="center">
                                <Pagination
                                    activePage={this.state.pagination.page}
                                    disabled={this.state.isLoading}
                                    onPageChange={this.handlePageChange}
                                    totalPages={this.state.pagination.pages}
                                />
                            </FlexContainer>
                        )
                    }
                </Container>
            </React.Fragment>
        );
    }
};

export default Courses;
