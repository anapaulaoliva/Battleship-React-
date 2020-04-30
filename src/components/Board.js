import React, { Component } from 'react';
import Square from './Square.js';
import Border from '../assets/board-border.png';
import '../styles/Board.css';

class Board extends Component {
    render() {
        let rows = [];
        for(let y = 0; y < 10; y++) {
            const cells = [];
            for (let x = 0; x < 10; x++) {
                cells.push(<Square/>);
            }
            rows.push(<tr>{cells}</tr>);
        }

        return (
            <>
            <section className="Board">
            <img src={Border} 
                className="Border" 
                alt="Board-border"/>
            <br/>
                {   
                    <table><tbody>{rows}</tbody></table>
                    //squares.map((square) => <Square/>)

                }
            </section>
            </>
        )
    }

};

export default Board;