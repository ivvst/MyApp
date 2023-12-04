
import ShipItem from "./ShipItem.jsx"
import ShipInfo from "./ShipInfo.jsx";
import Delete from '../delete/Delete';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import * as shipService from "../../services/shipService.js";
import Path from "../../path.js";
import Carousel from 'react-bootstrap/Carousel';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/esm/Button.js";
import { Link } from "react-router-dom";

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
    console.log(setShowDeleteModal);
    navigate(Path.Home);
  };


  return (
    <>
      <div className="my-component">


        <Carousel activeIndex={index} onSelect={handleSelect}
          style={{ maxWidth: '2000px', marginBottom: '100px' }}>

          <Carousel.Item>
            <img src="https://www.uniworld.com/dfsmedia/0abe5a49082f4fa787b315e25f74cead/10210-50061/resize/1920x0/options/keepaspectratio.png" alt="image" />
            <Carousel.Caption className="latest-ships-heading">
              <h3>Introducing Our Newest Super Ships</h3>
              <div className="btn-info">
                <Link to={Path.Home}>
                  <button>View More</button>
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://www.uniworld.com/dfsmedia/0abe5a49082f4fa787b315e25f74cead/9609-50061/resize/1920x0/options/keepaspectratio.jpg" alt="image" />
            <Carousel.Caption className="latest-ships-heading">
              <h3>Travel Europe as a Solo Traveller in 2023</h3>
              <div className="btn-info">
                <Link to={Path.Home}>
                  <button>Learn More</button>
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </div>

      {ships.map(ship => (
        <ShipItem key={ship._id} onInfoClick={openShipDetails}
          onDeleteClick={() => handleDeleteClick(ship)}
          {...ship} />
      ))}
      {/* {ships.length == 0 && <h3 className="no-ships">Not added ships yet</h3>
      } */}
      <Offcanvas show={showInfo} onHide={closeShipDetails} backdrop="static">

        <Offcanvas.Body>
          {showInfo && selectedShip && (
            <ShipInfo shipId={selectedShip} onClose={closeShipDetails} />
          )}

        </Offcanvas.Body>
      </Offcanvas>
      {/* 
      {showInfo && selectedShip && (
        <ShipInfo shipId={selectedShip} onClose={closeShipDetails} />
      )} */}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <Delete
          onCancel={() => setShowDeleteModal(false)}
          onConfirm={() => handleDeleteConfirm(selectedShip._id)}
          shipId={selectedShip._id}
        />
      )}
    </>
  );
}

export default Catalog;