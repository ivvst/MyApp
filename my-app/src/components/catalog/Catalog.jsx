import ShipItem from "./ShipItem.jsx"
import ShipInfo from "./ShipInfo.jsx";

import { useEffect, useState } from "react";
import * as shipService from "../../services/shipService.js";
const Catalog = () => {
  const [ships, setShips] = useState([]);
  const [selectedShip, setSelectedShip] = useState(null);
  const [showInfo, setShowInfo] = useState(false);




  useEffect(() => {
    shipService.getAll()
      .then(result => setShips(result))
      .catch(err => console.log(err))
  }, []);

  const openShipDetails = async (ship) => {
    setSelectedShip(ship);
    setShowInfo(true);
  };

  const closeShipDetails = () => {
    setSelectedShip(null);
    setShowInfo(false);
  };


  return (
    <>
      {ships.map(ship => (
        <ShipItem key={ship._id} onInfoClick={openShipDetails} {...ship} />
      ))}

      {showInfo && selectedShip && (
        <ShipInfo shipId={selectedShip} onClose={closeShipDetails} />
      )}
    </>
  );
}

export default Catalog;