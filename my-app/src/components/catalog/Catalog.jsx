import ShipItem from "./ShipItem.jsx"
import ShipInfo from "./ShipInfo.jsx";

import { useEffect, useState } from "react";
import * as shipService from "../../services/shipService.js";
const Catalog = () => {
  const [ships, setShips] = useState([]);
  const [showInfo, setShowInfo] = useState(false);
  const [selectedShip, setSelectedShip] = useState(null);




  useEffect(() => {
    shipService.getAll()
      .then(result => setShips(result))
      .catch(err => console.log(err))
  }, []);

  const shipInfoClickHandler = async (shipId) => {
    setSelectedShip(shipId);
    setShowInfo(true);
};


  return (
    <>

      {ships.map(ship => <ShipItem key={ship._id} onInfoClick={shipInfoClickHandler}{...ship} />)}


      {showInfo && (
                <ShipInfo
                    onClose={() => setShowInfo(false)}
                    shipId={selectedShip}
                />
            )}


    </>

  );
}

export default Catalog;