import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getOne } from "../../services/shipService";
import AuthContext from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

const Gallery = ({ shipId }) => {
    const navigate = useNavigate();
    const { userId } = useContext(AuthContext);
    const [ship, setShip] = useState({});

    useEffect(() => {
        getOne(shipId)
            .then(result => setShip(result));
    }, [shipId]);

    console.log(shipId);

    // Render the gallery data
    return (
        <div>
            {/* Display gallery images and information */}
            {/* Adjust the rendering based on your gallery data structure */}
            <h2>{ship.name}'s Gallery</h2>
            <img src={ship.backImage} alt={`${ship.name}'s Gallery`} />
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
