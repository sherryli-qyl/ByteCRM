import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

import PersonManagement from '../../UI/personManagement/PersonManagement';
import {
    addStudentToCourse,
    fetchStudents,
    removeStudentToCourse
} from '../../api/student';

class StudentManagement extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isActionSuccessful: false,
            isAddingOrRemoving: false,
            isSearching: false,
            pagination: {},
            studentToAdd: '',
            studentToRemove: '',
            students: [],
        };
    }

    searchStudent = query => {
        this.setState({ isSearching: true }, () => {
            fetchStudents(1, 100, query)
                .then(studentData => this.setState({
                    isSearching: false,
                    pagination: studentData.pagination,
                    students: studentData.students,
                }))
                .catch(error => this.setState({ error }));

        });
    }

    setStudentToAdd = studentToAdd => this.setState({ studentToAdd, isActionSuccessful: false })

    setStudentToRemove = studentToRemove => this.setState({ studentToRemove, isActionSuccessful: false })

    handleSuccess = () => {
        this.setState({ isAddingOrRemoving: false, isActionSuccessful: true });
        this.props.reloadPage(this.props.courseId);
    }

    addStudent = () => {
        this.setState({ isAddingOrRemoving: true, isActionSuccessful: false }, () => {
            addStudentToCourse(this.state.studentToAdd, this.props.courseId)
                .then(this.handleSuccess)
                .catch(error => this.setState({ error }));
        });
    }

    removeStudent = () => {
        this.setState({ isAddingOrRemoving: true, isActionSuccessful: false }, () => {
            removeStudentToCourse(this.state.studentToRemove, this.props.courseId)
                .then(this.handleSuccess)
                .catch(error => this.setState({ error }));
        });
    }

    render() {
        return (
            <Modal
                trigger={<Button positive>Manage Students</Button>}
            >
                <PersonManagement
                    error={this.state.error}
                    handleAdd={this.addStudent}
                    handlePersonToAddChange={this.setStudentToAdd}
                    handlePersonToRemoveChange={this.setStudentToRemove}
                    handleRemove={this.removeStudent}
                    handleSearchChange={this.searchStudent}
                    isActionSuccessful={this.state.isActionSuccessful}
                    isAddingOrRemoving={this.state.isAddingOrRemoving}
                    isSearching={this.state.isSearching}
                    personsToAdd={this.state.students}
                    personsToRemove={this.props.enrolledStudents}
                    personToAdd={this.state.studentToAdd}
                    personToRemove={this.state.studentToRemove}
                />
            </Modal>
        );
    }
}

export default StudentManagement;
