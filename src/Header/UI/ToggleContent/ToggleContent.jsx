import React from 'react';
import PropTypes from 'prop-types';

class ToggleContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };

    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  }

  render() {
    const { toggle, content } = this.props;
    const { show } = this.state;

    return (
      <>
        {toggle(this.toggleShow)}
        {show && content(this.toggleShow)}
      </>
    );
  }
}

ToggleContent.propTypes = {
  toggle: PropTypes.func.isRequired,
  content: PropTypes.func.isRequired,
};

export default ToggleContent;
