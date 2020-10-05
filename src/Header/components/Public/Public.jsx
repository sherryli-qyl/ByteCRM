import React from 'react';
import NavigationLink from '../NavigationLink';
import NavigationButton from '../NavigationButton';
import PostATaskModal from './components/PostATaskModal';
import CategoriesDropdown from './components/CategoriesDropdown';
import ToggleContent from '../../UI/ToggleContent';
import './Public.scss';


const Public = () => (
  <div className = "Layout">
    <NavigationLink.Naked href="/">
      <div className = "Logo">ByteCRM</div>
    </NavigationLink.Naked>
    <div className = "Divider"></div>
    <ToggleContent
      toggle={(toggler) => (
        <NavigationButton.Button
          variant="primary"
          href="/post-a-task"
          onClick={toggler}
        >
          Post a task
        </NavigationButton.Button>
      )}
      content={(toggler) => (
        <PostATaskModal onClose={toggler} />
      )}
    />
    <CategoriesDropdown />
    <NavigationLink.Text indictable href="/browse-tasks">
      Browse tasks
    </NavigationLink.Text>
    <NavigationLink.Text indictable href="/how-it-works">
      How it works
    </NavigationLink.Text>
  </div>
);

export default Public;
