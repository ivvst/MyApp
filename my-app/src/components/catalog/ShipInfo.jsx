import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as shipService from '../../services/shipService';
import Button from 'react-bootstrap/Button';

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

    <div className="overlay">
      <div className="details-container">
        <h2>{ship.name} Details</h2>
        <p>Description: {ship.description}</p>
        <p>Year Build: {ship.yearOfBuild}</p>
        <p>Capacity: {ship.totalGuests}</p>
        <img src={ship.imageUrl} alt="" className="news-card__image" />
        {isOwner &&
          <Button onClick={handleEditClick} variant="info">Edit </Button>
        }
        <Button onClick={onClose} variant="success">Close</Button>
      </div>
    </div>
  )
}

export default ShipInfo;