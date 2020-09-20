import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EventNoteIcon from '@material-ui/icons/EventNote';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import {hoverBar,card,records,recordsText} from '../style/MeetingCard.module.scss';
import Text from '../../../../../Style/Text';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = theme => ({
    root: {
        minWidth: 275,
      },
      time: {
        fontSize: 14,
        textAlign: "right",
      },
      pos: {
        marginBottom: 12,
      },
      divider: {
        margin: theme.spacing(2, 0),
      },
      type:{
        textAlign: "left",
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
  });



class MeetingCard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        outcome: 0,
        attendees:0
      };
    }

    handleOutcomeChange = event => {
      console.log('Click');
      this.setState({outcome:event.target.value});  
     
    };
    
    handleAttendeesChange = event => {
      console.log('Click');
      this.setState({outcome:event.target.value});  
     
    };

    render() {
        const { classes } = this.props;
       

        
        return (
        <Card className={classes.root,card}>
            <CardContent>
              <Grid container alignContent="space-between" alignItems="center">
                  <Grid item xs={6} className={classes.type}>
                    <Typography variant="h6" gutterBottom>
                    <EventNoteIcon/>
                    Logged meeting
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                  <Tooltip title="Tuesday, August 25, 2020 at 4:08 PM GMT+10" placement="top">
                    <Typography className={classes.time} color="textSecondary" gutterBottom>
                      Aug 25, 2020 at 4:08 PM GMT+10
                    </Typography>
                  </Tooltip>   
                  </Grid>
              </Grid>
              <div className={hoverBar}>
                <Grid container alignContent="space-between" alignItems="center">
                    <Grid item xs={5} >
                    </Grid>
                    <Grid item xs={5}>
                    <div className={records}>
                      <Text className={recordsText}>Associated with 2 records</Text>
                    </div>  
                    </Grid>
                    <Grid item xs={2}>
                      <Text className={recordsText}>Unpin</Text>
                    </Grid>
                </Grid>
                <Grid container alignContent="space-between" alignItems="center">
                    <Grid item xs={8} >
                    </Grid>
                    <Grid item xs={2}>
                      <Text className={recordsText}>History</Text>
                    </Grid>
                    <Grid item xs={2}>
                      <Text className={recordsText}>Delete</Text>
                    </Grid>
                  </Grid>
              </div>
            <Typography className={classes.pos} color="textSecondary">
              new meeting
            </Typography>
            <Divider className={classes.divider} />

            <Grid container alignContent="space-between" alignItems="center">
            <Grid item xs={3} >
            <FormControl className={classes.formControl}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Outcome
            </InputLabel>
            <Select
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              value={this.state.outcome}
              onChange={this.handleChange}
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Scheduled</MenuItem>
              <MenuItem value={20}>Completed</MenuItem>
              <MenuItem value={30}>Rescheduled</MenuItem>
            </Select>
          </FormControl>
            </Grid>
            <Grid item xs={3}>
            <FormControl className={classes.formControl}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Attendees
            </InputLabel>
            <Select
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              value={this.state.outcome}
              onChange={this.handleChange}
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Scheduled</MenuItem>
              <MenuItem value={20}>Completed</MenuItem>
              <MenuItem value={30}>Rescheduled</MenuItem>
            </Select>
          </FormControl>
            </Grid>
            <Grid item xs={3}>
            <FormControl className={classes.formControl}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Duration
            </InputLabel>
            <Select
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              value={this.state.outcome}
              onChange={this.handleChange}
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Scheduled</MenuItem>
              <MenuItem value={20}>Completed</MenuItem>
              <MenuItem value={30}>Rescheduled</MenuItem>
            </Select>
          </FormControl>
            </Grid>
            <Grid item xs={3}>
            <form className={classes.container} noValidate>
            <TextField
              id="date"
              label="Date"
              type="date"
              defaultValue="2020-08-26"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
            </Grid>
            <Grid item xs={3}>
            <form className={classes.container} noValidate>
            <TextField
              id="time"
              label="Time"
              type="time"
              defaultValue="07:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
          </form>
            </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Grid container >
          <Grid item xs={1} >
            <Avatar>Q</Avatar>
          </Grid>
          <Grid item xs={3} >
          <Typography className={classes.pos} color="textSecondary">
          Sherry Li logged a meeting with
          </Typography>
        </Grid>
        </Grid>
              
       
            </CardContent>
          
        </Card>
        );
      }
    }
    
export default withStyles(useStyles)(MeetingCard);