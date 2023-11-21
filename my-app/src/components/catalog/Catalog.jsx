import ShipItem from "./ShipItem.jsx"
import ShipInfo from "./ShipInfo.jsx";
import Delete from '../delete/Delete';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import * as shipService from "../../services/shipService.js";
const Catalog = () => {
  const [ships, setShips] = useState([]);
  const [selectedShip, setSelectedShip] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const navigate = useNavigate();



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

  const handleDeleteClick = ship => {
    setSelectedShip(ship);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {

    await shipService.remove(selectedShip._id);


    setShips(prevShips => prevShips.filter(ship => ship._id !== selectedShip._id));
    setShowDeleteModal(false);
    navigate('/catalog');
  };


  return (
    <>
      {ships.map(ship => (
        <ShipItem key={ship._id} onInfoClick={openShipDetails}
          onDeleteClick={() => handleDeleteClick(ship)}
          {...ship} />
      ))}

      {ships.length === 0 && (
        <h3 className="no-ships">Not added ships yet</h3>
      )}

      {showInfo && selectedShip && (
        <ShipInfo shipId={selectedShip} onClose={closeShipDetails} />
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <Delete
          onCancel={() => setShowDeleteModal(false)}
          onConfirm={() => handleDeleteConfirm(selectedShip._id)}
        />
      )}
    </>
  );
}

export default Catalog;