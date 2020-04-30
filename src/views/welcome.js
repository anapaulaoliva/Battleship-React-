import React from 'react';
import logo from '../assets/BattleshipMainLogo.png';
import logoBackground from '../assets/BattleshipBackgroundLogo.png';
import '../styles/App.css';
import Fieldset from '../components/Fieldset.js';
import Footer from '../components/Footer.js';

const Welcome = () => {

  return (
    <div className="Welcome">
        <div className="Main">
          <div className="logo">
            <img src={logo} className="LogoTop" alt="MainLogo" />
            <img src={logoBackground} className="LogoBottom" alt="logo-background" />
          </div>
          <Fieldset/>  
        </div>
      <Footer/>
    </div>
  );
}

export default Welcome;


