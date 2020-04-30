import React from 'react';
import '../styles/ShipSelector.css';
import firebase, { firestore } from 'firebase';
import AircraftShip from '../assets/ships/AircraftShape.png';
import CarrierShip from '../assets/ships/CarrierShape.png';
import CruiserShip from '../assets/ships/CruiserShape.png';

const ShipSelector = () => {
    const docRef = firestore().doc("recordJugadores/YDfHFFNYp8PHiHnMhFlZ");

    const loadInfo = () => {
        docRef.get()
        .then(doc => {
            if (doc && doc.exists) {
                const myData = doc.data();
                //set turn data state to:
                console.log(myData)
            }
        });
    };

    return(
        <>
        <div className="shipSelector">
            <div className="shipSelector-info">
                <span id="turn"></span>
                <button
                type="button"
                onClick={loadInfo}
                >
                loader
                </button>
                <br/>
                <span >Select Your Ships</span>
            </div>
            <div className="shipSelector-container">
                <div className="ship-info">
                    <img 
                        src={AircraftShip} 
                        className="aircraft-ship" 
                        alt="aircraft-ship" />
                    <span>Aricraft Ship</span>
                </div>
                <div className="ship-info">
                    <img 
                        src={CruiserShip} 
                        className="cruiser-ship" 
                        alt="cruiser-ship" />
                    <span>Cruiser Ship</span>
                </div>
                <div className="ship-info">
                    <img 
                        src={CarrierShip} 
                        className="carrier-ship" 
                        alt="carrier-ship" />
                    <span>Carrier Ship</span>
                </div>
            </div>
        </div>
    </>
    )
}

export default ShipSelector;
