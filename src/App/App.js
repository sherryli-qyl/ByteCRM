import React from 'react';
import './App.scss';
import Routes from '../Routes/Routes';
import TopNav from '../TopNav/TopNav';


function App() {
  return (
    <div>
      <TopNav />
      <main className = "container">
      <Routes />
      </main>
    </div>
  )
}

export default App;
