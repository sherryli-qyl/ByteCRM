import React from 'react';

const withModal = (Component, controller) => {
  class Wrapper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        controller,
      };
    }

    render() {
      const { controller } = this.state;
      return (
        <Component
          {...this.props}
          modalController={controller}
        />
      );
    }
  }
  return Wrapper;
};

export default withModal;
