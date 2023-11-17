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
        <div className="detail-page">
      <h2>Ship Details</h2>
      <div className="ship-info">
        <p>Total Guests: {ship.additionalInfo?.totalGuests}</p>
        <p>Year of Build: {ship.additionalInfo?.yearOfBuild}</p>
        <p>Name of the Ship: {ship.name}</p>
      </div>

      {/* Overlay for the current ship */}
      <div className={`overlay ${ship.name}-overlay`}>
        <p>This is the overlay for {ship.additionalInfo?.description}</p>
        {/* Additional overlay content */}
      </div>
    </div>
    )
}

export default ShipInfo;