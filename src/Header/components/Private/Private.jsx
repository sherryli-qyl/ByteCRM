import React from 'react';
import NavigationButton from '../NavigationButton';
import NavigationLink from '../NavigationLink';
import SignInModal from './components/SignInModal';
import SignUpModal from './components/SignUpModal';


const MODAL = {
  SIGN_IN: 'SIGN_IN',
  SIGN_UP: 'SIGN_UP',
  EMPTY: null,
};

class Private extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: MODAL.EMPTY,
    };

    this.showModal = this.showModal.bind(this);
  }

  showModal(target) {
    return (event) => {
      event.preventDefault();

      this.setState({
        showModal: target,
      });
    };
  }

  render() {
    const { showModal } = this.state;

    return (
      <>
        <div className = "Layout">
          <NavigationButton.Text onClick={this.showModal(MODAL.SIGN_IN)}>
            Sign in
          </NavigationButton.Text>
          <NavigationButton.Text onClick={this.showModal(MODAL.SIGN_UP)}>
            Register
          </NavigationButton.Text>
          <NavigationLink.Button variant="secondary" href="/enroll">
            Become a Tasker
          </NavigationLink.Button>
        </div>
        {showModal === MODAL.SIGN_IN && (
          <SignInModal
            onClose={this.showModal(MODAL.EMPTY)}
            onSignUp={this.showModal(MODAL.SIGN_UP)}
          />
        )}
        {showModal === MODAL.SIGN_UP && (
          <SignUpModal
            onClose={this.showModal(MODAL.EMPTY)}
            onSignIn={this.showModal(MODAL.SIGN_IN)}
          />
        )}
      </>
    );
  }
}

export default Private;
