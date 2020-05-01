import React from 'react';
import Routes from './Routes.js';
import firebase from './Firebase.js';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <React.StrictMode>
        <Routes />
      </React.StrictMode>
    </BrowserRouter>

    
  );
}

export default App;
