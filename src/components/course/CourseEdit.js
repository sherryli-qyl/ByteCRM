import React from 'react';
import { Segment } from 'semantic-ui-react';

import CourseForm from './components/CourseForm';
import ErrorMessage from '../UI/errorMessage/ErrorMessage';
import Header from '../UI/header/Header';
import { COURSE_BASE_URL } from '../routes/URLMap';
import { fetchCourseById, saveCourseById } from '../api/course';

class CourseEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            code: '',
            description: '',
            error: null,
            image: '',
            isLoading: false,
            isSaving: false,
            name: '',
        };
    }

    componentDidMount() {
        const courseId = this.props.match.params.id;
        this.setState({ isLoading: true }, () => {
            fetchCourseById(courseId)
                .then(course => this.setState({
                    code: course.code,
                    description: course.description,
                    image: course.image,
                    isLoading: false,
                    isSaving: false,
                    name: course.name,
                }))
                .catch(error => this.setState({ error }));
        });
    }

    handleChange = event => {
        const key = event.target.name;
        const value = event.target.value;
        this.setState({ [key]: value } );
    }

    handleSave = () => {
        const course = { ...this.state };
        const id = this.props.match.params.id;
        this.setState({ isSaving: true }, () => {
            saveCourseById(id, course)
                .then(() => this.props.history.push(`${COURSE_BASE_URL}/${id}`))
                .catch(error => this.setState({ error }));
        });   
    }

    render() {
        return (
            <React.Fragment>
                <ErrorMessage error={this.state.error} />
                <Header as="h2" textAlign="center">
                    Edit Course
                </Header>
                <Segment basic loading={this.state.isLoading || this.state.isSaving}>
                    <CourseForm
                        code={this.state.code}
                        description={this.state.description}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSave}
                        image={this.state.image}
                        name={this.state.name}
                        submitButtonText="Save"
                    />
                </Segment>
            </React.Fragment>
        );
    }
};

export default CourseEdit;
