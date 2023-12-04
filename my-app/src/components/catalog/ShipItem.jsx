import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';

import AuthContext from '../../contexts/authContext.jsx';
import * as shipService from '../../services/shipService.js'

import Gallery from "./Gallery"

import "./catalog.css"

const ShipItem = ({
  _id,
  _ownerId,
  name,
  imageUrl,
  rivers,
  cruiseLine,
  ownerName,
  onInfoClick,
  onDeleteClick

}) => {
  const { userId } = useContext(AuthContext);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [latestShips, setLatestShips] = useState([]);

  const [showGallery, setShowGallery] = useState(false);
  const shipId = _id;

  useEffect(() => {
    shipService.getLatest()
      .then(result => setLatestShips(result));
  }, [])


  const infoClickHandler = () => {
    onInfoClick(_id);

  };
  const handleDeleteClick = () => {
    setShowDeleteModal(true);
    onDeleteClick(_id)
  };

  const handleShowGalleryClick = () => {
    setShowGallery(true);
  };
  const handleHideGalleryClick = () => {
    setShowGallery(false);
  };

  const isOwner = _ownerId === userId;

  return (

    <div className="grid-two">
      <div>
        <img src={imageUrl} alt={name} />
      </div>
      <div className="info-container">
        <h2>{name}</h2>

        <h3 className='line'>{cruiseLine}</h3>
        {/* <p>S.S. Joie de Vivre brings the “joy of living” to the rivers of France. Step aboard your floating pied-à-terre in France, featuring handcrafted furniture and fine antiques, original artwork, and...</p>
        {/* <a role="button" className="btn btn-secondary" href="/us/ships/ss-joie-de-vivre">View the Ship</a>
        <a role="button" className="btn btn-primary" href="/us/river-cruise?ships=ss-joie-de-vivre">View Cruises</a> */}
        <p><strong>River/s:</strong> <em>{rivers}</em><span className="separator">/</span><strong>Guests:</strong> <em>128</em></p>

        <Button className="btn btn-secondary" variant="info" onClick={infoClickHandler}>Read  More</Button>
        {
          isOwner &&
          <Button className="btn btn-primary" variant="danger" onClick={handleDeleteClick}>Delete</Button>
        }

        <Button
          onClick={handleShowGalleryClick}
          variant="primary"
          style={{ padding: '5px 40px', margin: '20px' }}
        >
          Show Gallery
        </Button>
        {showGallery && (
          <Button
            onClick={handleHideGalleryClick}
            variant="danger"
            style={{ padding: '5px 40px', margin: '20px' }}
          >
            Hide Gallery
          </Button>
        )}

        {/* Conditionally render the Gallery component */}
        {showGallery && (
          <Gallery shipId={shipId} ownerId={_ownerId} shipName={name} />
        )}
      </div>
    </div>

  );
}
export default ShipItem;