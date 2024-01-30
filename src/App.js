import React from 'react';
import './App.css';
import Sidebar from './pages/Sidebar';
import Main from './pages/Main';
import Disclaimer from './pages/Disclaimer';

function App() {
  

  return (
    <>
      <div className='main-side'>
        <Main />
        <Sidebar/>
        <Disclaimer/>
      </div>
    </>
  );
}

export default App;
