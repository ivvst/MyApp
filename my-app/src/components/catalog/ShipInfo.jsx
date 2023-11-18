import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as shipService from '../../services/shipService';
import "./info.css"


const ShipInfo = ({
  shipId,
  onClose,

}) => {
  const [ship, setShip] = useState({});
  const navigate = useNavigate();


  const handleEditClick = () => {
   
    navigate(`/edit/${shipId}`);
  };

  useEffect(() => {
    shipService.getOne(shipId)
      .then(result => setShip(result));
  }, [shipId]);

  return (

    <div className="overlay">
      <div className="details-container">
        <h2>{ship.name} Details</h2>
        <p>Description: {ship.additionalInfo?.description}</p>
        <p>Year Build: {ship.additionalInfo?.yearOfBuild}</p>
        <p>Capacity: {ship.additionalInfo?.totalGuests}</p>
        <p>Image: {ship.imageUrl}</p>
        <button className="news-card__read-more" onClick={handleEditClick}>
          Edit <i className="fas fa-long-arrow-alt-right"></i>
        </button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default ShipInfo;