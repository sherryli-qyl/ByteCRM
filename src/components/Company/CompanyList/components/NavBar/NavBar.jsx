import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import './NavBar.scss';

import TabContainer from "../TabContainer";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
  },
  colorPrimary: {
    color: "white",
  },
});

class NavBar extends React.Component {
  state = {
    activeTab: 1,
  };

  handleChange = (event, activeTab) => {
    this.setState((state) => ({ activeTab }));
  };

  render() {
    const { classes } = this.props;
    const { activeTab } = this.state;

    return (
      <div className={classes.root}>
        <h1>Companies</h1>
        <Tabs value={activeTab} onChange={this.handleChange}>
          {this.props.tabs.map((tab) => (
            <Tab
              label={tab.label}
              key={tab.id}
              value={tab.id}
            />
          ))}
        </Tabs>
        {this.props.tabs.map((tab) =>
          activeTab === tab.id ? (
            <TabContainer className={classes.wrapper} key={tab.id}>
              {tab.component}
            </TabContainer>
          ) : null
        )}
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
