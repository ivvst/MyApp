import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as shipService from "../../services/shipService"


import "./delete.css";

const Delete = ({ onCancel, onConfirm, shipId }) => {
  const handleConfirm = async () => {
    // Now you have access to shipId directly
    await onConfirm(shipId);
    onCancel();
  };

  const [ship, setShip] = useState({});

  useEffect(() => {
    shipService.getOne(shipId)
      .then(result => setShip(result));
  }, [shipId]);


  return (
    <Modal
      show={true}  // Set to true to display the modal
      onHide={onCancel}  // Handle closing the modal when clicking outside or pressing the close button
    >
      <Modal.Header closeButton>
        <Modal.Title>Confirm Deletion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {ship ? (
          <p>Are you sure you want to delete {ship.name}?</p>
        ) : (
          <p>Loading ship data...</p>
        )}
      </Modal.Body>


      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Close
        </Button>
        <Button variant="primary" onClick={handleConfirm}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Delete;
