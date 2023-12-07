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
        const requiredFields = ['name', 'cruiseLine', 'deckUrl', 'rivers', , 'backImage', 'grandSuite', 'suite', 'deluxeBalcony', 'frenchBalcony', 'classic', 'lenght', 'width', 'imageUrl', 'totalGuests', 'yearOfBuild', 'description', 'ownerName'];
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
            <form className="edit-form">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={shipData.name} onChange={handleChange} />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>

                <div>
                    <label htmlFor="yearOfBuild">Year of Build:</label>
                    <input type="number" id="yearOfBuild" name="yearOfBuild" value={shipData.yearOfBuild || ''} onChange={handleChange} />
                    {errors.yearOfBuild && <span className="error">{errors.yearOfBuild}</span>}
                </div>
                <div>
                    <label htmlFor="cruiseLine">Cruise Line:</label>
                    <input type="text" id="cruiseLine" name="cruiseLine" value={shipData.cruiseLine} onChange={handleChange} />
                    {errors.cruiseLine && <span className="error">{errors.cruiseLine}</span>}
                </div>

                <div>
                    <label htmlFor="imageUrl">Image URL:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={shipData.imageUrl} onChange={handleChange} />
                    {errors.imageUrl && <span className="error">{errors.imageUrl}</span>}
                </div>

                <div>
                    <label htmlFor="rivers">River Line:</label>
                    <input type="text" id="rivers" name="rivers" value={shipData.rivers} onChange={handleChange} />
                    {errors.rivers && <span className="error">{errors.rivers}</span>}
                </div>
                <div>
                    <label htmlFor="imageUrl">Outer-Image URL:</label>
                    <input type="text" id="backImage" name="backImage" value={shipData.backImage} onChange={handleChange} />
                    {errors.imageUrl && <span className="error">{errors.imageUrl}</span>}
                </div>

                <div>
                    <label htmlFor="totalGuests">Total Guests:</label>
                    <input type="number" id="totalGuests" name="totalGuests" value={shipData.totalGuests || ''} onChange={handleChange} />
                    {errors.totalGuests && <span className="error">{errors.totalGuests}</span>}
                </div>
                
                <div>
                    <label htmlFor="deckUrl">Deck-Plan</label>
                    <input type="text" id="deckUrl" name="deckUrl" value={shipData.deckUrl} onChange={handleChange} />
                    {errors.deckUrl && <span className="error">{errors.deckUrl}</span>}
                </div>


                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" value={shipData.description} onChange={handleChange} />
                    {errors.description && <span className="error">{errors.description}</span>}
                </div>

                <div>
                    <label htmlFor="grandSuite">Grand Suite:</label>
                    <input type="text" id="grandSuite" name="grandSuite" value={shipData.grandSuite} onChange={handleChange} />
                    {errors.grandSuite && <span className="error">{errors.grandSuite}</span>}
                </div>

                <div>
                    <label htmlFor="suite">Suite: </label>
                    <input type="text" id="suite" name="suite" value={shipData.suite} onChange={handleChange} />
                    {errors.suite && <span className="error">{errors.suite}</span>}
                </div>

                <div>
                    <label htmlFor="deluxeBalcony">Deluxe Balcony Line:</label>
                    <input type="text" id="deluxeBalcony" name="deluxeBalcony" value={shipData.deluxeBalcony} onChange={handleChange} />
                    {errors.deluxeBalcony && <span className="error">{errors.deluxeBalcony}</span>}
                </div>
                <div>
                    <label htmlFor="frenchBalcony">French Balcony Line:</label>
                    <input type="text" id="frenchBalcony" name="frenchBalcony" value={shipData.frenchBalcony} onChange={handleChange} />
                    {errors.frenchBalcony && <span className="error">{errors.frenchBalcony}</span>}
                </div>
                <div>
                    <label htmlFor="classic">Classic-Room Line:</label>
                    <input type="text" id="classic" name="classic" value={shipData.classic} onChange={handleChange} />
                    {errors.classic && <span className="error">{errors.classic}</span>}
                </div>
                <div>
                    <label htmlFor="lenght">Lenght Line:</label>
                    <input type="text" id="lenght" name="lenght" value={shipData.lenght} onChange={handleChange} />
                    {errors.lenght && <span className="error">{errors.lenght}</span>}
                </div>
                <div>
                    <label htmlFor="width">Width Line:</label>
                    <input type="text" id="width" name="width" value={shipData.width} onChange={handleChange} />
                    {errors.width && <span className="error">{errors.width}</span>}
                </div>
                <button className="button primary-button" onClick={handleSave} disabled={isLoading}>
                    {isLoading ? 'Saving...' : 'Save'}
                </button>

                <button className="button secondary-button" onClick={() => navigate(`/catalog`)}>
                    Cancel
                </button>
            </form>
        </div>
    );
}

export default Edit;
