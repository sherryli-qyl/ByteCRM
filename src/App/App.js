import React from 'react';
import './App.scss';
import Routes from '../Routes';
import Header from '../Header/Header';

function App() {
  return (
    <div>
      <Header />
      <main className = "container">
      <Routes />
      </main>
    </div>
  )
}

export default App;
