import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { checkbox } from '../../Theme/MatUITheme';
import TaskFollowSelect from '../../Select/Modal/TaskFollowSelect';
import './taskFollow.scss';


class Taskfollow extends React.Component {
    constructor(props) {
        super(props);
        const theme = checkbox;
        this.state = {
            checked: false,
            theme,
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
        const { theme, checked } = this.state;
        return (
            <div className='taskFollow'>
                {/* <ThemeProvider theme={theme}> */}
                    <div className='taskFollow__checkbox'>
                        <Checkbox
                            checked={this.checked}
                            onChange={this.handlecheckbox}
                            color={'primary'}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />

                        <div className='taskFollow__checkbox__text'>
                            <span>Create a task to follow up</span>
                        </div>
                    </div>
                    {checked ?
                        <div className='taskFollow__select'>
                            <TaskFollowSelect theme={this.state.theme} />
                        </div>
                        :
                        <div />
                    }
                {/* </ThemeProvider> */}
            </div>
        )
    }
}

export default Taskfollow;