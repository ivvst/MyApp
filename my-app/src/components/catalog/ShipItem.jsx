import React, { useState } from 'react'
import Delete from "../delete/Delete";
import "./catalog.css"
import ShipInfo from "./ShipInfo";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import * as shipService from '../../services/shipService.js'

const ShipItem = ({
  _id,
  name,
  imageUrl,
  cruiseLine,
  ownerName,
  onInfoClick,
  onDeleteClick

}) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);


  const infoClickHandler = () => {
    onInfoClick(_id);

  };
  const handleDeleteClick = () => {
    setShowDeleteModal(true);
    onDeleteClick(_id)
    console.log(_id);
  };
 

  return (
    <div className="content-wrapper">
      <div className="news-card">
        <a href="#" className="news-card__card-link"></a>
        <img src={imageUrl} alt="" className="news-card__image" />
        <div className="news-card__text-wrapper">
          <h2 className="news-card__title">{name}</h2>
          <div className="news-card__post-date">Jan 29, 2018</div>
          <div className="news-card__details-wrapper">
            <p className="news-card__excerpt">{cruiseLine}</p>
            <p className="news-card__excerpt">{ownerName}</p>

            <Button className="news-card__read-more" variant="info" onClick={infoClickHandler}>ReadMore</Button>
            <Button className="news-card__read-more" variant="danger" onClick={handleDeleteClick}>Delete</Button>
          </div>
        </div>
      </div>
    </div>


  );
}
export default ShipItem;