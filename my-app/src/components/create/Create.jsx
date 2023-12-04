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
      console.log(shipsData);
      await shipService.create(shipsData);
      navigate('/catalog');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section id="create-page" className="auth">
      <form id="create" onSubmit={createShipSubmitHandler}>
        <div className="container">
          <h1>Add new Vessel</h1>
          <label htmlFor="name">Name of the Ship:</label>
          <input type="text" id="name" name="name" placeholder="Enter a name..." />

          <label htmlFor="cruiseLine">Cruise-Line:</label>
          <input type="text" id="cruiseLine" name="cruiseLine" placeholder="Enter cruise-line ..." />

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



          <input className="btn submit" type="submit" value="Create Ship" />
          <button className="button secondary-button" onClick={() => navigate(`/catalog`)}>
            Cancel
          </button>
        </div>
      </form>
    </section >
  );
};

export default Create;
