import React from 'react';
import Board from './Board.js';
import ShipSelector from './ShipSelector.js';
import '../styles/GameContainer.css';


const GameContainer = () => {
    return(
        <section className="gameContainer">
            <ShipSelector/>
            <Board/>
        </section>
    )
}

export default GameContainer;