import React from 'react';
import firebase, { firestore } from 'firebase';
import { useHistory } from 'react-router-dom';
import  useForm  from './useForm.js';
import validate from './validateForm.js';
import '../styles/Fieldset.css';

const Fieldset = () => {
    // useState recibe un parámetro: el valor inicial del estado y devuelve un array de dos posiciones:
    //  la primera tiene el valor del estado
    //  la segunda el método para actualizar el estado
    const { handleChange, handleSubmit, values, errors } = useForm(submit, validate);
    const history = useHistory();

    function submit() {
        firestore().collection("recordJugadores").add(values)
        .then(() => {
            history.push('/home');
            console.log('Record successfully created!', values);
        })
    }
            
            
            /*orderBy("timestamp", "desc").onSnapshot(snapshot => {      
            //code goes here*/

    return(
        <fieldset className="form">
            <legend>Enter your names:</legend>
            <div>
                <label htmlFor="player1"></label>
                    <div>
                        <input 
                            className={`${errors.player2 && "inputError"}`}
                            type="text" 
                            id="player1" 
                            name="player1"
                            value={/*values.player1.name*/values.player1} 
                            onChange={handleChange}
                            placeholder="Player1" />
                            {errors.player1 &&
                            <p className="error">{errors.player1}</p>}
                    </div>
                    
                <label htmlFor="player2"></label>
                    <div>
                        <input 
                            className={`${errors.player2 && "inputError"}`}
                            type="text" 
                            id="player2" 
                            name="player2"
                            value={/*values.player2.name*/ values.player2} 
                            onChange={handleChange}
                            placeholder="Player2" />
                            {errors.player2 &&
                            <p className="error">{errors.player2}</p>}
                    </div>
            </div>
               
                    <button 
                        type="button" 
                        id = "saveButton"
                        className="MainBtn"
                        onClick={handleSubmit}
                    >
                    Start The Battle!
                    </button>
               
        </fieldset>
    );
}

export default Fieldset;