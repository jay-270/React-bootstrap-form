import React, { Fragment } from 'react';
import Form1 from './components/Form1';
import Tble1 from './components/Tble1';
import './styles/app.scss';

const App=()=> {
  // const items = JSON.parse(localStorage.getItem());

  return (
   <>
    <Form1 style/>
    
   <div className='table'>
    
    <Tble1/>
    
   </div>
   </>
  );
}

export default App;
