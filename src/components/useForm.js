//customed hook
import { useState, useEffect } from 'react';
import firebase from 'firebase';


const useForm = (callback, validate) => { 

    const [values, setValues] = useState({

        /*player1: {
            name: '',
            score: 0
        },
        player2: {
            name: '',
            score: 0
        },
        date_added: firebase.firestore.FieldValue.serverTimestamp(),*/
    });
    //new state for errors
    const [errors, setErrors] = useState({ player1: "", player2: ""
        /*player1: {
            name: '',
        },
        player2: {
            name: '',
        },*/
    });
    //function that validates these errors
    // pass these errors back to form
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleChange = e => {
        //destructuring 
        const { id, value, name } = e.target;
        setValues({
            ...values,
            /*
            [id]: {
                name: value,
                score: 0}*/
            [name]: value
        });
    }

    const handleSubmit= e => {
        //handling errors
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
        //callback();
    };
    //useEffect hook
    //first argument function that is going to execute when somethings changing
    //second is the observer that -only when x changes exectutes the function
    useEffect(() => {
        //check to see if there are no errors
        if (Object.keys(errors).length === 0 && isSubmitting)
        // call our callback
        callback();
    } , [errors])



    return {
        values,
        handleChange,
        handleSubmit,
        errors
    }
};

export default useForm;