import React, { Component } from 'react';
import Square from './Square.js';
import '../styles/Board.css';

class Board extends Component {
    render() {
        const squares = [1,2,3,4,5,6,7,8,9,10];
        return (
            <section className="Board">
                {
                    squares.map((square) => <Square/>)
                }

            </section>
        )
    }

};

export default Board;