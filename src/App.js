import React from 'react';
import logo from './BattleshipMainLogo.png';
import logoBackground from './BattleshipBackgroundLogo.png';
import gitHubLogo from './github-logo.JPG';
import './App.css';

function App() {
  return (
    <main className="App">
      <div className="App-main">
        <img src={logo} className="App-logo-top" alt="main-logo" />
        <img src={logoBackground} className="App-logo-bottom" alt="logo-background" />
        <button type="button" className="App-main-btn">Start The Battle!</button>
      </div>
    <footer className="App-footer">
        <img src={gitHubLogo} className="App-footer-logo" alt="github-logo" />''
        <a
          className="App-link"
          href="https://github.com/anapaulaoliva/Battleship-React"
          target="_blank"
          rel="noopener noreferrer"
          alt="source-code"
        > 
        source code
        </a>
        <br /><br />
      </footer>
    </main>
  );
}

export default App;
