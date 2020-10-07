import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';







const useStyles = theme => ({
    root: {
        minWidth: 100,
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



class MeetingModalMultiSelect extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        outcome: 0,
        attendees:0,
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
        <div className="border-bottom">
            <Grid container alignContent="space-between" alignItems="center">
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
            
            </Grid>
            <Grid item xs={3}>
            
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
        </Grid>
        </div>
        );
      }
    }
    
export default withStyles(useStyles)(MeetingModalMultiSelect);