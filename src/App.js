import React from 'react';
import './App.css';
import Sidebar from './pages/Sidebar';
import Main from './pages/Main';
import Disclaimer from './pages/Disclaimer';

function App() {
  const [visible,setVisible]=React.useState(false);
  return (
      <div className='main-side'>
        <Disclaimer setVisible={setVisible}/>
        {
          visible ? (
            <>
              <Main />
              <Sidebar />
            </>
          ) : (
            <>
              
            </>
          )
        }
      </div>
  
  );
}

export default App;
