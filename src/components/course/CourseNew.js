import React from 'react';
import { Segment } from 'semantic-ui-react';

import CourseForm from './components/CourseForm';
import ErrorMessage from '../UI/errorMessage/ErrorMessage';
import Header from '../UI/header/Header';
import { COURSE_BASE_URL } from '../routes/URLMap';
import { createCourse } from '../api/course';

class CourseNew extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            code: '',
            description: '',
            error: null,
            image: '',
            isCreating: false,
            name: '',
        };
    }

    handleChange = event => {
        const key = event.target.name;
        const value = event.target.value;
        this.setState({ [key]: value } );
    }

    handleCreate = () => {
        const course = { ...this.state };
        this.setState({ isCreating: true }, () => {
            createCourse(course)
                .then(newCourse => {
                    this.props.history.push(`${COURSE_BASE_URL}/${newCourse.code}`);
                })
                .catch(error => this.setState({ error }));
        });
    }

    render() {
        return (
            <React.Fragment>
                <ErrorMessage error={this.state.error} />
                <Header as="h2" textAlign="center">
                    Create Course
                </Header>
                <Segment basic loading={this.state.isCreating}>
                    <CourseForm
                        code={this.state.code}
                        description={this.state.description}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleCreate}
                        image={this.state.image}
                        name={this.state.name}
                        submitButtonText="Create"
                    />
                </Segment>
            </React.Fragment>
        );
    }
};

export default CourseNew;
