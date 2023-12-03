import React from 'react';
import "./delete.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Delete = ({ onCancel, onConfirm }) => {
  const handleConfirm = () => {
    onConfirm();
    onCancel();
  };

  return (
    <Modal
      show={true}  // Set to true to display the modal
      onHide={onCancel}  // Handle closing the modal when clicking outside or pressing the close button
    >
      <Modal.Header closeButton>
        <Modal.Title>Confirm Deletion</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Are you sure you want to delete this ship?</p>
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
