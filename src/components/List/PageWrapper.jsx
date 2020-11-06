import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { orange } from "@material-ui/core/colors";
import TabContainer from "./components/TabContainer/TabContainer";
import TableWrapper from "./components/TableWrapper";
import Loading from "../Loading";

const theme = createMuiTheme({
  palette: {
    primary: orange,
  },
});

class PageWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
    };
  }

  handleChange = (event, activeTab) => {
    event.preventDefault();
    this.changeLoadingVisible(true);
    this.setState({
      activeTab,
    });
    setTimeout(() => {
      this.changeLoadingVisible(false);
    }, 500);
  };

  changeLoadingVisible = (s) => {
    this.setState({
      showLoading: s,
    });
  };

  render() {
    const { activeTab } = this.state;
    return (
      <>
        <ThemeProvider theme={theme}>
          <Tabs
            value={activeTab}
            onChange={this.handleChange}
            key="tabs"
            indicatorColor="primary"
          >
            {this.props.tabs.map((tab) => (
              <Tab key={tab.id} label={tab.label} value={tab.id} />
            ))}
          </Tabs>
        </ThemeProvider>

        {this.props.tabs.map((tab) =>
          this.state.showLoading ? (
            <Loading variant={"full page"} />
          ) : (
            activeTab === tab.id && (
              <div key="table">
                <TabContainer key={`id${tab.id}`}>{tab.component}</TabContainer>
                <TableWrapper
                  key={`ID${tab.id}`}
                  tab={tab.id}
                  userAccount={this.props.userAccount}
                  type={this.props.type}
                />
              </div>
            )
          )
        )}
      </>
    );
  }
}

export default PageWrapper;
