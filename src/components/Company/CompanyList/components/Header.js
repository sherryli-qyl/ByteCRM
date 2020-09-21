import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import AccountCircle from "@material-ui/icons/AccountCircle";
import ContactsIcon from "@material-ui/icons/Contacts";
import ConversationsIcon from "@material-ui/icons/Chat";
import MarketingIcon from "@material-ui/icons/Storefront";
import SalesIcon from "@material-ui/icons/MoneyOff";
import ServiceIcon from "@material-ui/icons/Settings";
import AutomationIcon from "@material-ui/icons/Autorenew";
import ReportsIcon from "@material-ui/icons/Report";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";

import logo from "../images/hubspotLogo.png";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  root: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
    anchor: "left",
    open: false,
  });

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, open: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key="Contacts">
          <ListItemIcon>
            <ContactsIcon />
          </ListItemIcon>
          <ListItemText primary="Contacts" />
        </ListItem>
      </List>

      <List>
        <ListItem button key="Conversations">
          <ListItemIcon>
            <ConversationsIcon />
          </ListItemIcon>
          <ListItemText primary="Conversations" />
        </ListItem>
      </List>

      <List>
        <ListItem button key="Marketing">
          <ListItemIcon>
            <MarketingIcon />
          </ListItemIcon>
          <ListItemText primary="Marketing" />
        </ListItem>
      </List>

      <List>
        <ListItem button key="Sales">
          <ListItemIcon>
            <SalesIcon />
          </ListItemIcon>
          <ListItemText primary="Sales" />
        </ListItem>
      </List>

      <List>
        <ListItem button key="Service">
          <ListItemIcon>
            <ServiceIcon />
          </ListItemIcon>
          <ListItemText primary="Service" />
        </ListItem>
      </List>

      <List>
        <ListItem button key="Automation">
          <ListItemIcon>
            <AutomationIcon />
          </ListItemIcon>
          <ListItemText primary="Automation" />
        </ListItem>
      </List>

      <List>
        <ListItem button key="Reports">
          <ListItemIcon>
            <ReportsIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <React.Fragment key={state.anchor}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <img src={logo} height="45" />
          </IconButton>
          <Typography variant="h6" className={classes.title}></Typography>
          <div>
            {/* <IconButton color="inherit">
              <SearchIcon />
            </IconButton> */}

            <IconButton color="inherit">
              <MarketingIcon />
            </IconButton>

            <IconButton color="inherit">
              <ServiceIcon />
            </IconButton>

            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>

            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Typography variant="h6">cml</Typography>
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
        <Drawer
          anchor={state.anchor}
          open={state.open}
          onClose={toggleDrawer(false)}
        >
          {list(state.anchor)}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
