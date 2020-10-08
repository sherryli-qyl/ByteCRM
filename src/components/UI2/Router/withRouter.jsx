/* eslint-disable react/jsx-props-no-spreading */

// HOC
// Higher Order Component
// 高阶组件

import React from 'react';
import RouterContext from './RouterContext';

// 克里函数

const withRouter = (Component) => (props) => (
  <RouterContext.Consumer>
    {(router) => (
      <Component
        {...props}
        router={router}
      />
    )}
  </RouterContext.Consumer>
);

export default withRouter;
