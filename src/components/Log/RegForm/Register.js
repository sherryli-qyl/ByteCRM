import React from 'react';
import RegLogo from './components/RegLogo';
import RegisterForm from './components/RegisterForm';
import './Style/style.scss';

export default class RegiForm extends React.Component {
  render() {
    return (
      <div>
        <RegLogo />
        <RegisterForm />
      </div>
    );
  }
}
