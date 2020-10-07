import React from 'react';
import Routes from '../components/Routes';
import Header from '../components/Header';

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
