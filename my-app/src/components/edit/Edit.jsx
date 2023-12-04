import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as shipService from '../../services/shipService';
import "./Edit.css"

const Edit = () => {
    const { shipId } = useParams();
    const navigate = useNavigate();

    const [shipData, setShipData] = useState({
        name: '',
        cruiseLine: '',
        imageUrl: '',
        totalGuests: '',
        yearOfBuild: '',
        description: '',
        ownerName: '',
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        shipService.getOne(shipId)
            .then(result => setShipData(result))
            .catch(error => console.error('Error fetching ship data:', error));
    }, [shipId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShipData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        // Validate required fields
        const requiredFields = ['name', 'cruiseLine', 'deckUrl', 'rivers', 'imageUrl', 'totalGuests', 'yearOfBuild', 'description', 'ownerName'];
        requiredFields.forEach((field) => {
            if (!shipData[field]) {
                newErrors[field] = 'This field is required';
            }
        });

        // Validate numeric fields
        const numericFields = ['totalGuests', 'yearOfBuild'];
        numericFields.forEach((field) => {
            const value = shipData[field];
            if (value !== '' && isNaN(value)) {
                newErrors[field] = 'Must be a valid number';
            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };
    const [isLoading, setIsLoading] = useState(false);

    // Update your handleSave function
    const handleSave = async () => {
        try {
            setIsLoading(true);
            // Save the edited ship data using your service
            await shipService.edit(shipId, shipData);
            // After saving, navigate back to the ship details page
            navigate(`/catalog`);
        } catch (error) {
            console.error('Error saving ship data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="edit-container">
            <h3>Update your Ship-info</h3>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={shipData.name} onChange={handleChange} />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div>
                    <label htmlFor="cruiseLine">Cruise Line:</label>
                    <input type="text" id="cruiseLine" name="cruiseLine" value={shipData.cruiseLine} onChange={handleChange} />
                    {errors.cruiseLine && <span className="error">{errors.cruiseLine}</span>}
                </div>
                <div>
                    <label htmlFor="rivers">River Line:</label>
                    <input type="text" id="rivers" name="rivers" value={shipData.rivers} onChange={handleChange} />
                    {errors.rivers && <span className="error">{errors.rivers}</span>}
                </div>
                <div>
                    <label htmlFor="imageUrl">Image URL:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={shipData.imageUrl} onChange={handleChange} />
                    {errors.imageUrl && <span className="error">{errors.imageUrl}</span>}
                </div>
                <div>
                    <label htmlFor="deckUrl">Image URL:</label>
                    <input type="text" id="deckUrl" name="deckUrl" value={shipData.deckUrl} onChange={handleChange} />
                    {errors.deckUrl && <span className="error">{errors.deckUrl}</span>}
                </div>
                <div>
                    <label htmlFor="totalGuests">Total Guests:</label>
                    <input type="number" id="totalGuests" name="totalGuests" value={shipData.totalGuests || ''} onChange={handleChange} />
                    {errors.totalGuests && <span className="error">{errors.totalGuests}</span>}
                </div>
                <div>
                    <label htmlFor="yearOfBuild">Year of Build:</label>
                    <input type="number" id="yearOfBuild" name="yearOfBuild" value={shipData.yearOfBuild || ''} onChange={handleChange} />
                    {errors.yearOfBuild && <span className="error">{errors.yearOfBuild}</span>}
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" value={shipData.description} onChange={handleChange} />
                    {errors.description && <span className="error">{errors.description}</span>}
                </div>
                <button className="button primary-button"  onClick={handleSave} disabled={isLoading}>
                    {isLoading ? 'Saving...' : 'Save'}
                </button>

                <button  className="button secondary-button"  onClick={() => navigate(`/catalog`)}>
                    Cancel
                </button>
            </form>
        </div>
    );
}

export default Edit;
