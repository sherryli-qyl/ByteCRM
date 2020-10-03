import React from 'react';
import RegLogo from './components/RegLogo';
import RegForm from './components/RegForm';
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
