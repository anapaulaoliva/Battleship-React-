import React from 'react';
import logo from '../assets/BattleshipMainLogo.png';
import logoBackground from '../assets/BattleshipBackgroundLogo.png';
import '../App.css';
import Footer from '../components/Footer.js';

function Welcome() {
  //TODO: Aqui solo debe ir Router y se deben importar las vistas.
  //TODO: Cambiar nombres clases de app a welcome 
  
  return (
    <main className="App">
        <div className="App-main">
        <img src={logo} className="App-logo-top" alt="main-logo" />
        <img src={logoBackground} className="App-logo-bottom" alt="logo-background" />
        <button type="button" className="App-main-btn">Start The Battle!</button>
      </div>

      <Footer/>

    </main>
  );
}

export default Welcome;
