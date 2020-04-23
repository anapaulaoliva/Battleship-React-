import React from 'react';
import '../styles/ShipSelector.css';
import AircraftShip from '../assets/ships/AircraftShape.png';
import CarrierShip from '../assets/ships/CarrierShape.png';
import CruiserShip from '../assets/ships/CruiserShape.png';

const ShipSelector = () => {
    return(
        <div className="shipSelector">
            <div className="shipSelector-info">
                <span>Select Your Ships</span>
            </div>
            <div className="shipSelector-container">
                <div className="ship-info">
                    <img src={AircraftShip} className="aircraft-ship" alt="aircraft-ship" />
                    <span>Aricraft Ship</span>
                </div>
                <div className="ship-info">
                    <img src={CruiserShip} className="cruiser-ship" alt="cruiser-ship" />
                    <span>Cruiser Ship</span>
                </div>
                <div className="ship-info">
                    <img src={CarrierShip} className="carrier-ship" alt="carrier-ship" />
                    <span>Carrier Ship</span>
                </div>
            </div>
        </div>
    )
}

export default ShipSelector;
