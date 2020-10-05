import React from 'react';
import styled from 'styled-components';
import NavigationLink from '../NavigationLink';
import NavigationButton from '../NavigationButton';
import PostATaskModal from './components/PostATaskModal';
import CategoriesDropdown from './components/CategoriesDropdown';
import ToggleContent from '../../UI/ToggleContent';

const Layout = styled.div`
  display: flex;
`;

const Divider = styled.div`
  width: 1px;
  border-right: 1px solid #dadada;
`;

const Logo = styled.span`
  color: #008fb4;
`;

const Public = () => (
  <Layout>
    <NavigationLink.Naked href="/">
      <Logo>LOGO</Logo>
    </NavigationLink.Naked>
    <Divider />
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
  </Layout>
);

export default Public;
