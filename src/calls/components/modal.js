import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import { withStyles } from '@material-ui/styles';
import Contacted from './contacted';
import CallOutcome from './selection';
import Calendar from './calendar';
import TimePicker from './time';
import CloseIcon from '../../img/closeIcon.svg';

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}
const styles = {
  dialogPaper: {
    minHeight: '75vh',
    maxHeight: '75vh',
    minWidth: '120vh',
    maxWidth: '120vh',
  },
};

//Button style
const LogCallBtn = withStyles({
  root: {
    backgroundColor: '#eaf0f6',
    borderColor: '#cbd6e2',
    color: '#506e91',
    fontFamily: 'Varela Round, sans-serif',
    fontSize: 13,
    marginTop: '10rem',
    marginLeft: '5rem',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const LogActivityBtn = withStyles({
  root: {
    fontFamily: 'Varela Round, sans-serif',
    fontSize: 13,
    backgroundColor: '#eaf0f6',
    borderColor: '#ff7a59',
    color: '#506e91',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

function DraggableDialog({ classes }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <LogCallBtn variant="outlined" onClick={handleClickOpen}>
        Log Call
      </LogCallBtn>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        maxWidth={true}
        aria-labelledby="draggable-dialog-title"
        classes={{ paper: classes.dialogPaper }}
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Log Call
          <img
            className="closeIcon"
            src={CloseIcon}
            alt=""
            onClick={handleClose}
          />
        </DialogTitle>
        <DialogContent dividers>
          <ul className="callsNavBar">
            <li>Contacted</li>
            <li>Call outcome</li>
            <li>Date</li>
            <li>Time</li>
          </ul>
          <ul className="callsNavItems">
            <li>
              <Contacted />
            </li>
            <li>
              <CallOutcome />
            </li>
            <li>
              <Calendar />
            </li>
            <li>
              <TimePicker />
            </li>
          </ul>
          <hr />
          <textarea
            name="textEditor"
            id="textEditor"
            className="textArea"
            cols="92"
            rows="12"
          ></textarea>
          U B I 组件
        </DialogContent>

        <DialogActions>
          <LogActivityBtn variant="outlined">Log Activity</LogActivityBtn>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default withStyles(styles)(DraggableDialog);
