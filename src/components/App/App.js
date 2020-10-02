import React from 'react';
import './App.scss';
import Routes from '../Routes';
import TopBar from '../TopBar/TopBar';

function App() {
  return (
    <div>
      <TopBar />
      <main className = "container">
      <Routes />
      </main>
    </div>
  )
};

export default App;
