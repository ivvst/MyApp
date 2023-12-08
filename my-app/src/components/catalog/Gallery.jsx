import React, { useContext, useEffect, useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { Popover, Rate, message } from 'antd';
import { getOne } from "../../services/shipService";
import AuthContext from "../../contexts/authContext";
import * as reviewService from '../../services/reviewService';
import useForm from '../../hooks/useForm';
import reducer from './reviewReducer';
import "./review.css";

const Gallery = ({ shipId }) => {
  const navigate = useNavigate();
  const { userId, email } = useContext(AuthContext);
  const [ship, setShip] = useState({});
  const [reviews, dispatch] = useReducer(reducer, []);
  const [userRating, setUserRating] = useState(0);

  useEffect(() => {
    getOne(shipId)
      .then(result => setShip(result));
  }, [shipId]);

  useEffect(() => {
    reviewService.getAll(shipId)
      .then((result) => {
        dispatch({
          type: 'GET_ALL_REVIEWS',
          payload: result,
        });
      });
  }, [shipId]);

  const isOwner = ship._ownerId === userId;

  const addReviewHandler = async (values) => {
    try {
      const newReview = await reviewService.create(shipId, values.review, userRating);

      newReview.owner = { email };

      dispatch({
        type: 'ADD_REVIEW',
        payload: newReview,
      });

      // Reset the review input and user rating
      onChange({ target: { name: 'review', value: '' } });
      setUserRating(0);

      message.success('Review added successfully!');
    } catch (error) {
      console.error("Error adding review:", error);
      message.error('Failed to add review. Please try again.');
    }
  };

  const { values, onChange, onSubmit } = useForm(addReviewHandler, {
    review: '',
  });

  const content = (
    <div>
      {/* Review section */}
      <div className="details-reviews">
        <h2>Reviews:</h2>
        <ul>
          {reviews.map(({ _id, text, owner: { email }, rating }) => (
            <li key={_id} className="review">
              <p>{email}: {text}</p>
              <Rate disabled value={rating} />
            </li>
          ))}
        </ul>

        {reviews.length === 0 && (
          <p className="no-review">No reviews.</p>
        )}
      </div>

      {/* Create Review section */}
      {!isOwner && (
        <article className="create-review">
          <label>Add new review:</label>
          <form className="form" onSubmit={onSubmit}>
            <textarea name="review" value={values.review} onChange={onChange} placeholder="Review..."></textarea>
            <Rate value={userRating} onChange={(value) => setUserRating(value)} />
            <input className="btn submit" type="submit" value="Add review" />
          </form>
        </article>
      )}
    </div>
  );
  const popoverOverlayStyle = {
    width: '400px', // Set your desired width
  };

  return (
    <div>
      {/* Display gallery images and information */}
      {/* Adjust the rendering based on your gallery data structure */}
      <h2>{ship.name}'s Gallery</h2>
      <Popover content={content} title={ship.name} trigger="hover" overlayStyle={popoverOverlayStyle}>
        <img src={ship.backImage} alt={`${ship.name}'s Gallery`} />
      </Popover>
      {/* Add more details as needed */}
      <p>Grand Suite: {ship.grandSuite}</p>
      <p> Suite: {ship.suite}</p>
      <p>Deluxe Balcony: {ship.deluxeBalcony}</p>
      <p>French Balcony: {ship.frenchBalcony}</p>
      <p>Classic: {ship.classic}</p>
      <p>Lenght: {ship.lenght}</p>
      <p>Width: {ship.width}</p>
      {/* Render other gallery details */}
    </div>
  );
};

export default Gallery;
