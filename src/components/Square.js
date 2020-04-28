import React, { Component } from 'react';
import '../styles/Square.css';

class Square extends Component {
    render() {
        return (
            <td className="square">
                <div className="circle"></div>
            </td>
        )
    }
} 

export default Square;