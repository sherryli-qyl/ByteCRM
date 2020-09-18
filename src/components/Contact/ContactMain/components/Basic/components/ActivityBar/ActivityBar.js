import React from 'react';
import ActivityItem from './components/ActivityItem';
import './ActivityBar.scss';


const ActivityBar = ({
    navItems,
    onNavItemClick,
    currentModal,
  }) => (
    <nav className="activity__Bar">
      {navItems.map((item) => (
        <ActivityItem 
          key = {item.key}
          name ={item.value}
          src={item.src}
          active={currentModal === item.key} 
           onClick={() => onNavItemClick(item)}
        >
          {item.value}
        </ActivityItem>
      ))}
    </nav>
  );

export default ActivityBar;