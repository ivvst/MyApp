import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import * as galleryService from "../../services/galleryService"
import AuthContext from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

const Gallery = ({ shipId, ownerId, shipName }) => {
    const [galleryData, setGalleryData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { userId } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await galleryService.fetchGalleryData(shipId);
                setGalleryData(data);

            } catch (error) {
                console.error('Error fetching gallery data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [shipId]);

    const handleCreateGallery = async () => {
        setLoading(true);
        navigate(`/create-gallery/${shipId}`);
        // await galleryService.createGalleryData(shipId, shipName, ownerId);
        // // After creating, re-fetch the gallery data
        // const data = await galleryService.fetchGalleryData(shipId);
        // setGalleryData(data);
        setLoading(false);
    };

    if (loading) {
        return <p>Loading...</p>; // You can replace this with a loading spinner or other UI indication
    }

    if (!galleryData) {
        // If there is no gallery data, show a "Create" button for the ship owner
         return ownerId === userId ? (
            <button type="button" onClick={handleCreateGallery}>
                Create Gallery
            </button>
        ) : 'In Progress...';
    }

    // Render the gallery data
    return (
        <div>
            {/* Display gallery images and information */}
            {/* Adjust the rendering based on your gallery data structure */}
            <h2>{galleryData.name}'s Gallery</h2>
            <img src={galleryData.imageUrl} alt={`${galleryData.name}'s Gallery`} />
            {/* Add more details as needed */}
            <p>Grand Suite: {galleryData.grandSuite}</p>
            <p> Suite: {galleryData.suite}</p>
            <p>Deluxe Balcony: {galleryData.deluxeBalcony}</p>
            <p>French Balcony: {galleryData.frenchBalcony}</p>
            <p>Classic: {galleryData.classic}</p>
            <p>Lenght: {galleryData.lenght}</p>
            <p>Width: {galleryData.width}</p>
            {/* Render other gallery details */}
        </div>
    );
};

export default Gallery;
