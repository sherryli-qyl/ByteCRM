import React from 'react';
import TabItem from './TabItem/TabItem';

import './TabBar.scss';

const TabBar = ({
  tabItems,
  currentPage,
  onTabItemClick,
}) => (
    <nav className={"tabBar"}>
      {tabItems.map((item) => (
      <TabItem 
        key={item.key}
        active={currentPage === item.key} 
        onClick={() => onTabItemClick(item)}
      >
        {item.value}
      </TabItem>
    ))}
  </nav>
);

export default TabBar;