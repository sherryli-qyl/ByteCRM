import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import TabContainer from "./TabContainer";
import TableWrapper from "../TableWrapper";

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
  };

  render() {
    const { activeTab } = this.state;

    return (
      <>
        <AppBar position="static">
          <Tabs value={activeTab} onChange={this.handleChange} key={"tabs"}>
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
                <TabContainer>{tab.component}</TabContainer>
                <TableWrapper
                  tab={tab.id}
                  userAccount={this.props.userAccount}
                />
              </>
            )
        )}
      </>
    );
  }
}

// export default withStyles(styles)(SwitchBar);
export default SwitchBar;
