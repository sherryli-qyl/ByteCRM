import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

import PersonManagement from '../../UI/personManagement/PersonManagement';
import {
    addLecturerToCourse,
    fetchLecturers,
    removeLecturerToCourse
} from '../../api/lecturer';

class LecturerManagement extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isActionSuccessful: false,
            isAddingOrRemoving: false,
            isSearching: false,
            pagination: {},
            lecturerToAdd: '',
            lecturerToRemove: '',
            lecturers: [],
        };
    }

    searchLecturer = query => {
        this.setState({ isSearching: true }, () => {
            fetchLecturers(1, 100, query)
                .then(lecturerData => this.setState({
                    isSearching: false,
                    pagination: lecturerData.pagination,
                    lecturers: lecturerData.lecturers,
                }))
                .catch(error => this.setState({ error }));

        });
    }

    setLecturerToAdd = lecturerToAdd => this.setState({ lecturerToAdd, isActionSuccessful: false })

    setLecturerToRemove = lecturerToRemove => this.setState({ lecturerToRemove, isActionSuccessful: false })

    handleSuccess = () => {
        this.setState({ isAddingOrRemoving: false, isActionSuccessful: true });
        this.props.reloadPage(this.props.courseId);
    }

    addLecturer = () => {
        this.setState({ isAddingOrRemoving: true, isActionSuccessful: false }, () => {
            addLecturerToCourse(this.state.lecturerToAdd, this.props.courseId)
                .then(this.handleSuccess)
                .catch(error => this.setState({ error }));
        });
    }

    removeLecturer = () => {
        this.setState({ isAddingOrRemoving: true, isActionSuccessful: false }, () => {
            removeLecturerToCourse(this.state.lecturerToRemove, this.props.courseId)
                .then(this.handleSuccess)
                .catch(error => this.setState({ error }));
        });
    }

    render() {
        return (
            <Modal
                trigger={<Button positive>Manage Lecturers</Button>}
            >
                <PersonManagement
                    error={this.state.error}
                    handleAdd={this.addLecturer}
                    handlePersonToAddChange={this.setLecturerToAdd}
                    handlePersonToRemoveChange={this.setLecturerToRemove}
                    handleRemove={this.removeLecturer}
                    handleSearchChange={this.searchLecturer}
                    isActionSuccessful={this.state.isActionSuccessful}
                    isAddingOrRemoving={this.state.isAddingOrRemoving}
                    isSearching={this.state.isSearching}
                    personsToAdd={this.state.lecturers}
                    personsToRemove={this.props.assignedLecturers}
                    personToAdd={this.state.lecturerToAdd}
                    personToRemove={this.state.lecturerToRemove}
                />
            </Modal>
        );
    }
}

export default LecturerManagement;
