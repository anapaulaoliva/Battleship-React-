export default function validate(values) {
    let errors = {};
    //input player 1 input player 2
    if(!values.player1){
    // more than 0 characters
        errors.player1 = "Player1 is required to play :(";
    } 
    if (!values.player2){
        errors.player2 = "Player2 is required to play :(";
    }
    return errors;
}
