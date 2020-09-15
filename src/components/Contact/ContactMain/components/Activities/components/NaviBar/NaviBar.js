import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { ThemeProvider } from '@material-ui/core/styles';
import TabPanel from './components/TabPanel';
import getTheme from '../../../../../../Style/Theme/MatUITheme';

import "./NaviBar.scss";



function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

class NaviBar extends React.Component {
  constructor(props) {
    super(props);

    const tabBarItems = [
      { key: 0, value: "Activity", page: (<div>Activity</div>) },
      { key: 1, value: "Notes", page: (<div>Notes</div>) },
      { key: 2, value: "Emails", page: (<div>Emails</div>) },
      { key: 3, value: "Calls", page: (<div>Calls</div>) },
      { key: 4, value: "Tasks", page: (<div>Tasks</div>) },
      { key: 5, value: "Meetings", page: (<div>Meetings</div>) },
    ]
    const theme = getTheme();
    this.state = {
      tabBarItems,
      value: "",
      theme
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event, newValue) => {
    this.setState({
      value: newValue,
    })
  };


  render() {
    const { value, tabBarItems,theme } = this.state;
    return (
      <div>
        <ThemeProvider theme={theme}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              {tabBarItems.map((item) => (
                <Tab label={item.value} {...a11yProps(item.key)} />
              ))}
            </Tabs>
          </AppBar>
          {tabBarItems.map((item) => (
            <TabPanel value={value} index={item.key}>
              {item.page}
            </TabPanel>
          ))}
        </ThemeProvider>
      </div >
    );
  }
}

export default NaviBar;