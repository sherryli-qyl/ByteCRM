import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import TabContainer from "./components/TabContainer/TabContainer";
import TableWrapper from "./components/TableWrapper";

class ListPage extends React.Component {
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
          <Tabs value={activeTab} onChange={this.handleChange} key={"tabs"}>
            {this.props.tabs.map((tab) => (
              <Tab
                key={tab.id}
                label={tab.label}
                value={tab.id}
              />
            ))}
          </Tabs>

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

export default ListPage;