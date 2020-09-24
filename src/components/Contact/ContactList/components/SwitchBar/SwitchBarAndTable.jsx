import React from "react";
import "./SwitchBarAndTable.scss";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Importer from "../Importer";
import TabContainer from "./TabContainer";
import EnhancedTable from "../Table/EnhancedTable";

import getRows from "../../tableServices/getData";
import Modal from "../../../../Modal";

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
      newData: [],
      dataToEdit: {},
    };
  }

  handleChange = (event, activeTab) => {
    this.setState({ activeTab: activeTab });
  };

  getNewData = (newData) => {
    if (newData.length !== 0) {
      this.setState({ newData: newData });
    }
  };

<<<<<<< HEAD
  showModal = () => {
    this.setState({ addVisible: true });
=======
  // showModal = () => {
  //   this.setState({ addVisible: true });
  // };

  getDataToEdit = (data) => {
    this.setState({ dataToEdit: data });
    setTimeout(() => {
      console.log(this.state.dataToEdit)
    }, 500)
>>>>>>> rename folder and get so close to modal completion
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
        <Importer getNewData={this.getNewData} />

        {this.props.tabs.map(
          (tab) =>
            activeTab === tab.id && (
<<<<<<< HEAD
              <>
                <TabContainer className={classes.wrapper} key={tab.id}>
                  {tab.component}
                </TabContainer>
                <EnhancedTable
                  data={getRows(
                    this.state.activeTab,
                    this.props.userAccount,
                    this.state.newData,
                    this.state.filter
                  )}
                />
              </>
=======
              <TabContainer className={classes.wrapper} key={tab.id}>
                {tab.component}
              </TabContainer>
            )
        )}
        {this.props.tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <EnhancedTable
                getDataToEdit={this.getDataToEdit}
                data={getRows(
                  this.state.activeTab,
                  this.props.userAccount,
                  this.state.newData,
                  this.state.filter
                )}
              />
>>>>>>> rename folder and get so close to modal completion
            )
        )}
      </div>
    );
  }
}

export default withStyles(styles)(SwitchBar);
