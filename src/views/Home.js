import React, { Component, Fragment } from 'react';
import '../styles/App.css';
import NavBar from '../components/NavBar.js';
import Board from '../components/Board.js';
import Footer from '../components/Footer.js';

class Home extends Component {
  render() {

    return(
      <>
      <main className="Home">
      <NavBar/>
        <div className="Main">
          <Board/>
        </div>
        <Footer/>
      </main>
      </>
    );
  }
}

  
  export default Home;