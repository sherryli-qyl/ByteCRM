import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Importer from '../Importer';
import TabContainer from "./TabContainer";
import EnhancedTable from '../Table/EnhancedTable';
import getRows from '../../services/getData';


const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    position: "relative",
  },
  colorPrimary: {
    color: "red",
  },
});

class SwitchBar extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      activeTab: 1,
      newData: [],
      data: []
    };
  }

  handleChange = (event, activeTab) => {
    this.setState({ activeTab: activeTab });
  };

  getNewData = (newData) => {
    if (newData.length !== 0) {
      this.setState({ newData: newData });
    }
  }

  render() {
    const { classes } = this.props;
    const { activeTab } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.wrapped}>
          <Tabs value={activeTab} onChange={this.handleChange}>
            {this.props.tabs.map((tab) => (
              <Tab
                key={tab.id}
                label={tab.label}
                value={tab.id}
                icon={tab.icon}
              />
            ))}
          </Tabs>
          <Importer getNewData={this.getNewData} />
        </AppBar>
        {this.props.tabs.map((tab) =>
          activeTab === tab.id ? (
            <TabContainer className={classes.wrapper} key={tab.id}>
              {tab.component}
            </TabContainer>
          ) : null
        )}
        {this.props.tabs.map((tab) =>
          activeTab === tab.id ? (
            <EnhancedTable data={getRows(this.state.activeTab, this.props.userAccount, this.state.newData)} />
          ) : null
        )}
      </div>
    );
  }
}

export default withStyles(styles)(SwitchBar);