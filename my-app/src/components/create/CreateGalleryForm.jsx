import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as shipService from "../../services/shipService";

const CreateGalleryForm = ({ shipId, onSubmit }) => {
  const [formData, setFormData] = useState({
    imageUrl: '',
    grandSuite: '',
    suite: '',
    deluxeBalcony: '',
    frenchBalcony: '',
    classic: '',
    length: '',
    width: '',
  });

  const [ship, setShip] = useState({});

  useEffect(() => {
    shipService.getOne(shipId)
      .then(result => setShip(result));
  }, [shipId]);


  const navigate = useNavigate();  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the form data to the onSubmit callback
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="shipName">Name of the Ship:</label>
        <input
          type="text"
          id="shipName"
          name="shipName"
          value={ship.name}
          disabled
        />
      </div>
      <div>
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        />
      </div>
      {/* Add similar input fields for other properties */}
      <div>
        <button type="submit">Submit</button>
        <button className="button secondary-button" onClick={() => navigate(`/catalog`)}>
            Cancel
          </button>
      </div>
    </form>
  );
};

export default CreateGalleryForm;
