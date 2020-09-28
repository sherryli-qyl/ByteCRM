import React from "react";
import "./SwitchBarAndTable.scss";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import TabContainer from "./TabContainer";
import EnhancedTable from "../Table/EnhancedTable";

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
    super(props);
    this.state = {
      activeTab: 1,
    };
  }

  handleChange = (event, activeTab) => {
    event.preventDefault();
    this.setState({
      activeTab: activeTab,
    });
    setTimeout(() => {
      this.props.getActiveTab(activeTab);
    }, 500);
  };

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
        </AppBar>

        {this.props.tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <>
                <TabContainer className={classes.wrapper} key={tab.id}>
                  {tab.component}
                </TabContainer>
                {/* <TableWrapper tab={tab.id} /> */}
              </>
            )
        )}
      </div>
    );
  }
}

export default withStyles(styles)(SwitchBar);
