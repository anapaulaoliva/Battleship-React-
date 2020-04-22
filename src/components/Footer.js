import React from 'react';
import gitHubLogo from '../assets/github-logo.JPG';

const Footer = () => {

return(
<footer className="Welcome-footer">
    <img src={gitHubLogo} className="Welcome-footer-logo" alt="github-logo" />''
    <a
        className="Welcome-footer-link"
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