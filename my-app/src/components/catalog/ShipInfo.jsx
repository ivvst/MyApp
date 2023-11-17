import { useState, useEffect } from "react";
import * as shipService from '../../services/shipService';
import "./info.css"


const ShipInfo = ({
    shipId,
    onClose,
    
}) => {
    const [ship, setShip] = useState({});

    useEffect(() => {
        shipService.getOne(shipId)
            .then(result => setShip(result));
    }, [shipId]);

    return(

      <div className="overlay">
      <div className="details-container">
        <h2>{ship.name} Details</h2>
        <p>Description: {ship.additionalInfo?.description}</p>
        <p>Year Build: {ship.additionalInfo?.yearOfBuild}</p>
        <p>Capacity: {ship.additionalInfo?.totalGuests}</p>
        <p>Image: {ship.image}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>

    //     <div className="detail-page">
    //   <h2>Ship Details</h2>
    //   <div className="ship-info">
    //     <p>Total Guests: {ship.additionalInfo?.totalGuests}</p>
    //     <p>Year of Build: {ship.additionalInfo?.yearOfBuild}</p>
    //     <p>Name of the Ship: {ship.name}</p>
    //   </div>

    //   {/* Overlay for the current ship */}
    //   <div className={`overlay ${ship.name}-overlay`}>
    //     <p>This is the overlay for {ship.additionalInfo?.description}</p>
    //     {/* Additional overlay content */}
    //   </div>
    // </div>
    )
}

export default ShipInfo;