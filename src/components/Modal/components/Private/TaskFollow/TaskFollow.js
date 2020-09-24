import React from 'react';
import TaskFollowCheckbox from './components/TaskFollowCheckbox';
import TaskFollowDropdown from './components/TaskFollowDropdown';
import './TaskFollow.scss';


class Taskfollow extends React.Component {
    constructor(props) {
        super(props);
        // const theme = checkbox;
        this.state = {
            checked: false,

        };
        this.handlecheckbox = this.handlecheckbox.bind(this);
    }

    handlecheckbox(e) {
        let newState = !this.state.checked
        this.setState({
            checked: newState,
        });
    }

    render() {
        const { checked } = this.state;
        return (
            <div className='taskFollow'>
                <div className='taskFollow__checkbox'>
                    <TaskFollowCheckbox
                        checked={this.checked}
                        onChange={this.handlecheckbox}
                    />

                    <div className='taskFollow__checkbox__text'>
                        <span>Create a task to follow up</span>
                    </div>
                </div>
                {checked ?
                    <div className='taskFollow__select'>
                        <TaskFollowDropdown theme={this.state.theme} />
                    </div >
                    :
                    ""
                }
            </div >
        )
    }
}

export default Taskfollow;