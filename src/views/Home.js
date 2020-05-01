import React, { Component } from 'react';
import '../styles/App.css';
import NavBar from '../components/NavBar.js';
import GameContainer from '../components/GameContainer.js';
import Footer from '../components/Footer.js';

class Home extends Component {
  render() {

    return(
      <>
      <main className="Home">
      <NavBar/>
        <div className="Main">
          <GameContainer/>
        </div>
        <Footer/>
      </main>
      </>
    );
  }
}

  
  export default Home;