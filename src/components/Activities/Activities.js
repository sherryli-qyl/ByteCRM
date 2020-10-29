import React from 'react';
import TabBar from './components/TabBar';
import EmailPage from './components/Email';
import TaskPage from './components/Task';
import NotesTimeLine from './components/Note';
import CallPanel from './components/Functions/Calls/index';
import './Activities.scss';
import MeetingPage from './components/Functions/Meeting/MeetingPage';

class Activities extends React.Component {
  constructor(props) {
    super(props);
    const { associatedContacts, contact, relatedTo } = this.props;
    const tabItems = [
      { key: 'Activity', value: 'Activity', activity: <div>Activity</div> },
      { key: 'Notes', value: 'Notes', activity: <NotesTimeLine relatedTo={relatedTo} associatedContacts={associatedContacts} /> },
      { key: 'Emails', value: 'Emails', activity: <EmailPage contact={contact} associatedContacts={associatedContacts} /> },
      { key: 'Calls', value: 'Calls', activity: <CallPanel /> },
      { key: 'Tasks', value: 'Tasks', activity: <TaskPage contact={contact} associatedContacts={associatedContacts} /> },
      { key: 'Meetings', value: 'Meetings', activity: <MeetingPage contact={contact} associatedContacts={associatedContacts} /> },
    ];
    this.state = {
      currentActivity: tabItems[0].key,
      tabItems,
    };
    this.handleOnclick = this.handleOnclick.bind(this);
  }

  handleOnclick(item) {
    console.log(item.key);
    this.setState({
      currentActivity: item.key,
    });
  }

  render() {
    const { tabItems, currentActivity } = this.state;

    return (
      <div className="container">
        <TabBar
          tabItems={tabItems}
          currentPage={currentActivity}
          onTabItemClick={this.handleOnclick}
        />
        <div className="activityPage">
          {tabItems.map((tabItem) => {
            if (currentActivity !== tabItem.key) {
              return null;
            }
            return (
              <React.Fragment key={tabItem.key}>
                {tabItem.activity}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Activities;
