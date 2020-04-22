import React, { Component } from 'react';
import '../styles/Square.css';

class Square extends Component {
    render() {
        return (
            <div className="square">
                <div className="circle"></div>
            </div>
        )
    }
} 

export default Square;