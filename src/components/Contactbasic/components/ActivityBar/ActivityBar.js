import React from 'react';
import ActivityItem from './components/ActivityItem';
import './ActivityBar.scss';


const ActivityBar = ({
    navItems,
    onNavItemClick,
    currentModal,
  }) => (
    <nav className="activity__list">
      {navItems.map((item) => (
        <ActivityItem 
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