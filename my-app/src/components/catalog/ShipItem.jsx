import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import AuthContext from '../../contexts/authContext.jsx';

import Gallery from "./Gallery"
import { FaHeart } from 'react-icons/fa';

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
  const { userId, isAuthenticated } = useContext(AuthContext);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const [showGallery, setShowGallery] = useState(false);

  const infoClickHandler = () => {
    onInfoClick(_id);

  };
  const handleDeleteClick = () => {
    setShowDeleteModal(true);
    onDeleteClick(_id)
  };
  const handleGalleryToggleClick = () => {
    setLoading(true);
    setShowGallery((prevShowGallery) => !prevShowGallery);

    // Set a timeout to hide the loading message after 3000 milliseconds (3 seconds)
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };


  const isOwner = _ownerId === userId;

  return (
    <>
      <div className="grid-two">
        <div>
          <img src={imageUrl} alt={name} />
        </div>
        <div className="info-container">
          <h2>{name}</h2>

          <h3 className='line'>{cruiseLine}</h3>
          {/* <p>S.S. Joie de Vivre brings the “joy of living” to the rivers of France. Step aboard your floating pied-à-terre in France, featuring handcrafted furniture and fine antiques, original artwork, and...</p>
        {/* <a role="button" className="btn btn-secondary" href="/us/s/ss-joie-de-vivre">View the </a>
        <a role="button" className="btn btn-primary" href="/us/river-cruise?s=ss-joie-de-vivre">View Cruises</a> */}
        {/* <button onClick={handleLikeToggle} className="like-button">
          <FaHeart style={{ color: state.likes === 1 ? 'red' : 'black' }} />
          {state.likes > 0 && <span className="like-count">{state.likes}</span>}
          {state.likes === 1 ? 'Dislike' : 'Like'}
        </button> */} 
           <p><strong>River/s:</strong> <em>{rivers}</em><span className="separator">/</span><strong>Guests:</strong> <em>128</em></p>


          <Button className="btn btn-secondary" variant="info" onClick={infoClickHandler}>Read  More</Button>
          {
            isOwner &&
            <Button className="btn btn-primary" variant="danger" onClick={handleDeleteClick}>Delete</Button>
          }
          {/* {!isOwner && (
          <Button onClick={handleAddToFavourites} disabled={state.favourites.includes(Id)}>
          {state.favourites.includes(Id) ? 'Added to Favourite' : 'Add to Favourite'}
          </Button>
        )} */}

          {isAuthenticated && (

            <Button
              onClick={handleGalleryToggleClick}
              variant={showGallery ? "danger" : "primary"}
              style={{ padding: '5px 40px', margin: '20px' }}
            >
              {showGallery ? "Hide Gallery" : "Show Gallery"}
            </Button>
          )}

          {/* Conditionally render the Gallery component */}
          {showGallery && (
            <Gallery shipId={_id} />
          )}
        </div>
      </div>

    </>
  );
}
export default ShipItem;