import React, { Component, Fragment } from 'react';
import Square from './Square.js';
import Border from '../assets/board-border.png';
import '../styles/Board.css';

class Board extends Component {
    render() {
        const squares = [1,2,3,4,5,6,7,8,9,10];
        //const squares = [];
        //const totalSquares = 100;
        return (
            <>
            
            <section className="Board">
            <img src={Border} className="Border" alt="Board-border"/>
            <br/>
                {
                    squares.map((square) => <Square/>)
                    /*while (squares < totalSquares.length) {
                        const square = {
                            key: 'key',
                        };

                        squares.push(square);
                        squares.push({...square});*/
                }

            </section>
            </>
        )
    }

};

export default Board;