import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {getWeekDay} from '../../../services/DateManager';
import Text from '../../Text';
import './TimeStamp.scss'


const useStyles = theme => ({
    root: {
        minWidth: 275,
    },
    timeStamp: {
        fontSize: 12,
        textAlign: "right",
    },
});

class TimeStamp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { classes } = this.props;
        const weekday = getWeekDay(this.props.date);
        return (
            <div className='timeStamp'>
                <Tooltip title={`${weekday} ${this.props.dateTime}`} placement="top">
                    <Typography className={classes.timeStamp} gutterBottom>
                        {this.props.dateTime}
                    </Typography>
                </Tooltip>
            </div>
        )
    }
}

export default withStyles(useStyles)(TimeStamp);

