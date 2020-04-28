import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase, { firestore } from 'firebase';
import '../styles/Fieldset.css';

const Fieldset = () => {
    const [docNamePlayersState, setDocNamePlayersState] = useState({
        player1: {
            name: '',
            score: 0
        },
        player2: {
            name: '',
            score: 0
        }
        
    });

    const handleInputChange = (e) => {
        
        setDocNamePlayersState({...docNamePlayersState,  [e.target.id] : {name: e.target.value, score: 0}});
        console.log(docNamePlayersState)
        
    }

    const addPlayers = ( ) => {
        console.log(docNamePlayersState);
        
        //TODO:validar que los inputs no esten vacios
        firestore().collection('recordPartidas').add(docNamePlayersState)
    }

    return(
        <fieldset className="form">
            <legend>Enter your names:</legend>
            <div>
                <label htmlFor="player1">
                    <input 
                        type="text" 
                        id="player1" 
                        name="player1"
                        value={docNamePlayersState.player1.name} 
                        onChange={handleInputChange}
                        placeholder="Player1" />
                </label>
                <label htmlFor="player2">
                    <input 
                        type="text" 
                        id="player2" 
                        name="player2"
                        value={docNamePlayersState.player2.name} 
                        onChange={handleInputChange}
                        placeholder="Player2" />
                </label>
            </div>
                <Link to='/home'>
                    <button 
                        type="button" 
                        id = "saveButton"
                        className="MainBtn"
                        onClick={addPlayers}
                    >
                    Start The Battle!
                    </button>
                </Link>
        </fieldset>
    );
}

export default Fieldset;