import React, { useContext } from "react";
import { useEffect, useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Popover } from 'antd';
import { getOne } from "../../services/shipService";
import AuthContext from "../../contexts/authContext";
import * as reviewService from '../../services/reviewService';
import useForm from '../../hooks/useForm';
import reducer from './reviewReducer';

const Gallery = ({ shipId }) => {
    const navigate = useNavigate();
    const { userId, email } = useContext(AuthContext)
    const [ship, setShip] = useState({});
    const [reviews, dispatch] = useReducer(reducer, []);

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
    const content = (
        <div>
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
                <article className="create-review">
                    <label>Add new review:</label>
                    <form className="form" onSubmit={onSubmit}>
                        <textarea name="review" value={values.review} onChange={onChange} placeholder="Review..."></textarea>
                        <input className="btn submit" type="submit" value="Add review" />
                    </form>
                </article>
            )}
        </div>
    );
    // Render the gallery data
    return (
        <div>
            {/* Display gallery images and information */}
            {/* Adjust the rendering based on your gallery data structure */}
            <h2>{ship.name}'s Gallery</h2>
            <Popover content={content} title={ship.name} trigger="hover">

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
