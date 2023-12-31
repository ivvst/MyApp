import { useState, useEffect, useReducer, useMemo } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


import AuthContext from "../../contexts/authContext";
import * as shipService from '../../services/shipService';

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Image} from 'antd'

import "./info.css"


const ShipInfo = ({
  shipId,
  onClose,

}) => {
  const [ship, setShip] = useState({});


  const { userId, email } = useContext(AuthContext)

  const navigate = useNavigate();

  const isOwner = ship._ownerId === userId;

  const handleEditClick = () => {

    navigate(`/edit/${shipId}`);
  };

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
        
        <Image.PreviewGroup>
          <Image
            width={500}
            src={ship.deckUrl}
            alt=""
            className="image"
          />
        </Image.PreviewGroup>
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
      </Offcanvas.Body >
    </>
  )
}

export default ShipInfo;