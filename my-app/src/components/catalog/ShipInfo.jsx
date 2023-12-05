import { useState, useEffect, useReducer, useMemo } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../contexts/authContext";
import * as shipService from '../../services/shipService';
import * as reviewService from '../../services/reviewService';
import reducer from './reviewReducer';
import useForm from '../../hooks/useForm';

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import "./info.css"


const ShipInfo = ({
  shipId,
  onClose,

}) => {
  const [ship, setShip] = useState({});
  const [reviews, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    reviewService.getAll(shipId)
      .then((result) => {
        dispatch({
          type: 'GET_ALL_REVIEWS',
          payload: result,
        });
      });
  }, [shipId]);


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

  const addReviewHandler = async (values) => {
    const newReview = await reviewService.create(
      shipId,
      values.review
    );

    newReview.owner = { email };

    dispatch({
      type: 'ADD_REVIEW',
      payload: newReview
    });
    onChange({ target: { name: 'review', value: '' } });
  }
  const { values, onChange, onSubmit } = useForm(addReviewHandler, {
    review: '',
  });

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
        {/* Review section */}
        <div className="details-reviews">
          <h2>Reviews:</h2>
          <ul>
            {reviews.map(({ _id, text, owner: { email } }) => (
              <li key={_id} className="review">
                <p>{email}: {text}</p>
              </li>
            ))}
          </ul>

          {reviews.length === 0 && (
            <p className="no-review">No reviews.</p>
          )}
        </div>

        {/* Create Review section */}
        {!isOwner && (
          < article className="create-review" >
            <label>Add new review:</label>
            <form className="form" onSubmit={onSubmit}>
              <textarea name="review" value={values.review} onChange={onChange} placeholder="Review..."></textarea>
              <input className="btn submit" type="submit" value="Add review" />
            </form>
          </article>
        )}
      </Offcanvas.Body >
    </>
  )
}

export default ShipInfo;

// {
//   isOwner &&
//     <Button onClick={handleEditClick} variant="info">Edit </Button>
// }