import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/BattleshipMainLogo.png';
import logoBackground from '../assets/BattleshipBackgroundLogo.png';
import '../styles/App.css';
import Footer from '../components/Footer.js';

const Welcome = () => {

  return (
    <main className="Welcome">
        <div className="Main">
          <img src={logo} className="LogoTop" alt="MainLogo" />
          <img src={logoBackground} className="LogoBottom" alt="logo-background" />
          <Link to='/home'>
          <button type="button" className="MainBtn">Start The Battle!</button>
        </Link>
      </div>

      <Footer/>

    </main>
  );
}

export default Welcome;
