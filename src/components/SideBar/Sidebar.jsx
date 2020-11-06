import React from 'react';
import SideBarItem from './components/SideBarItem/SideBarItem';
import './SideBar.scss';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { sideBarItems } = this.props;
    return (
      <div className="sideBar">
        {sideBarItems.map((item) => (
          <SideBarItem key={item.key}>
            {item.component}
          </SideBarItem>
        ))}
      </div>
    );
  }
}

export default SideBar;
