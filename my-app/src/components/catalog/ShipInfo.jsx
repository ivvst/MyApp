import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as shipService from '../../services/shipService';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import "./info.css"
import AuthContext from "../../contexts/authContext";


const ShipInfo = ({
  shipId,
  onClose,

}) => {
  const [ship, setShip] = useState({});

  const { userId } = useContext(AuthContext)

  const navigate = useNavigate();

  const isOwner = ship._ownerId === userId;

  const handleEditClick = () => {

    navigate(`/edit/${shipId}`);
  };
  console.log(setShip);

  useEffect(() => {
    shipService.getOne(shipId)
      .then(result => setShip(result));
  }, [shipId]);

  return (
    <>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{ship.name} Details</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <p>Description: {ship.description}</p>
        <p>Year Build: {ship.yearOfBuild}</p>
        <p>Capacity: {ship.totalGuests}</p>
        <img src={ship.deckUrl} alt="" className="image" />
        {isOwner && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button
          onClick={handleEditClick}
          variant="info"
          style={{ padding: '5px 40px', margin: '20px' }}
        >
          Edit
        </Button>
      </div>
      
        )}

      </Offcanvas.Body>
    </>
  )
}

export default ShipInfo;

// {
//   isOwner &&
//     <Button onClick={handleEditClick} variant="info">Edit </Button>
// }