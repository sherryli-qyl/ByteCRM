import React from 'react';
import RegLogo from './components/logo';
import RegForm from './components/regForm';
import './Style/style.scss';

export default class RegiForm extends React.Component {
  render() {
    return (
      <div>
        <RegLogo />
        <RegForm />
      </div>
    );
  }
}
