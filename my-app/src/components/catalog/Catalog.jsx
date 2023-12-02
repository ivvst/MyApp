
import ShipItem from "./ShipItem.jsx"
import ShipInfo from "./ShipInfo.jsx";
import Delete from '../delete/Delete';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import * as shipService from "../../services/shipService.js";
import Carousel from 'react-bootstrap/Carousel';

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

  const [latestShips, setLatestShips] = useState([]);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
  };

  useEffect(() => {
    shipService.getLatest()
      .then(result => setLatestShips(result));
  }, [])

  console.log(latestShips);


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
    console.log(selectedShip._id);

    await shipService.remove(selectedShip._id);


    setShips(prevShips => prevShips.filter(ship => ship._id !== selectedShip._id));
    setShowDeleteModal(false);
    navigate('/home');
  };


  return (
    <>
      <h3>Latest Ships</h3>

      {latestShips.length > 0 ? (
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {latestShips.map(ship => (
            <Carousel.Item key={ship._id}>
              <img className="d-block w-100" src={ship.imageUrl} alt={ship.name} />
              <Carousel.Caption>
                <h3>{ship.name}</h3>
                <p>{ship.cruiseLine}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <p>No Ships yet</p>
      )}

      {ships.map(ship => (
        <ShipItem key={ship._id} onInfoClick={openShipDetails}
          onDeleteClick={() => handleDeleteClick(ship)}
          {...ship} />
      ))}
      {/* {ships.length == 0 && <h3 className="no-ships">Not added ships yet</h3>
      } */}


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