import React from 'react';
import gitHubLogo from '../assets/github-logo.JPG';
//TODO: importar componente a welcome

const Footer = () => {

return(
<footer className="App-footer">
    <img src={gitHubLogo} className="App-footer-logo" alt="github-logo" />''
    <a
        className="App-link"
        href="https://github.com/anapaulaoliva/Battleship-React"
        target="_blank"
        rel="noopener noreferrer"
        alt="source-code"
    > 
    source code
    </a>
    <br /><br />
</footer>
);
}

export default Footer;