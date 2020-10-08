import React from 'react';
import RouterContext from './RouterContext';

const Route = ({
  path,
  render,
}) => (
  <RouterContext.Consumer>
    {(router) => router.path === path && render()}
  </RouterContext.Consumer>
);

export default Route;
