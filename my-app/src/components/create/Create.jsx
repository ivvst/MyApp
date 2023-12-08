import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Create.css"

import { Container, Form, Button } from "react-bootstrap";

import * as shipService from "../../services/shipService";

const Create = () => {
  const navigate = useNavigate();
  const createShipSubmitHandler = async (e) => {
    e.preventDefault();

    const shipsData = Object.fromEntries(new FormData(e.currentTarget));
    try {
     
      await shipService.create(shipsData);
      navigate('/catalog');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="create-container">
      <h1>Add new Vessel</h1>
      <form className="create-form" onSubmit={createShipSubmitHandler}>
        <div>

          <label htmlFor="name">Name of the Ship:</label>
          <input type="text" id="name" name="name" placeholder="Enter a name..." />
        </div>
        <div>

          <label htmlFor="cruiseLine">Cruise-Line:</label>
          <input type="text" id="cruiseLine" name="cruiseLine" placeholder="Enter cruise-line ..." />

        </div>
        <label htmlFor="rivers">River-Line:</label>
        <input type="text" id="rivers" name="rivers" placeholder="Enter cruise-line ..." />

        <label htmlFor="ship-img">Image:</label>
        <input type="text" id="imageUrl" name="imageUrl" placeholder="Add a photo..." />

        <label htmlFor="deck-img">DeckPlanImage:</label>
        <input type="text" id="deckUrl" name="deckUrl" placeholder="Add a plan..." />

        <h5>Details for the Vessel</h5>
        <label htmlFor="totalGuests">Total-Guests:</label>
        <input type="number" id="totalGuests" name="totalGuests" min="50" placeholder="10" />

        <label htmlFor="yearOfBuild">Year of Build:</label>
        <input type="number" id="yearOfBuild" name="yearOfBuild" min="1000" placeholder="2000" />

        <label htmlFor="description">Description:</label>
        <textarea name="description" id="description"></textarea>

        <h5>Gallery Details</h5>
        <div>
          <label htmlFor="ship-img">Image:</label>
          <input type="text" id="backImage" name="backImage" placeholder="Add a photo..." />

        </div>
        <div>
          <label htmlFor="grandSuite">Grand-Suite:</label>
          <input type="text" id="grandSuite" name="grandSuite" placeholder="2 (28 sq m)" />
        </div>
        <div>
          <label htmlFor="suite">Suite:</label>
          <input type="text" id="suite" name="suite" placeholder="2 (28 sq m)" />
        </div>
        <div>
          <label htmlFor="deluxeBalcony">Deluxe-Balcony:</label>
          <input type="text" id="deluxeBalcony" name="deluxeBalcony" placeholder="2 (28 sq m)" />
        </div>
        <div>
          <label htmlFor="frenchBalcony">French-Balcony:</label>
          <input type="text" id="frenchBalcony" name="frenchBalcony" placeholder="2 (28 sq m)" />
        </div>
        <div>
          <label htmlFor="classic">Classic:</label>
          <input type="text" id="classic" name="classic" placeholder="2 (28 sq m)" />
        </div>
        <div>
          <label htmlFor="lenght">Lenght:</label>
          <input type="text" id="lenght" name="lenght" placeholder="80 m" />
        </div>
        <div>
          <label htmlFor="width">Width:</label>
          <input type="text" id="width" name="width" placeholder="6.4 m" />
        </div>



        <input className="btn submit" type="submit" value="Create Ship" />
        <button className="button secondary-button" onClick={() => navigate(`/catalog`)}>
          Cancel
        </button>
      </form >
    </div>


  );
};

export default Create;
