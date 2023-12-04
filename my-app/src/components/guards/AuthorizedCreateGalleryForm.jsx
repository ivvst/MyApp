// AuthorizedCreateGalleryForm.jsx
import React, { useContext,useEffect,useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AuthContext from '../../contexts/authContext'; // Adjust the path
import Unauthorized from '../error/Unauthorized'; // Adjust the path
import CreateGalleryForm from '../create/CreateGalleryForm';
import * as shipService from "../../services/shipService";

const AuthorizedCreateGalleryForm = () => {
  const { userId,isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const { shipId } = useParams();
  const [ship, setShip] = useState({});

  useEffect(() => {
    shipService.getOne(shipId)
      .then(result => setShip(result));
  }, [shipId]);
   console.log(ship);
  const isOwner = isAuthenticated && userId === ship._ownerId;


  if (!isOwner) {
    // Unauthorized, use the Unauthorized component
    return <Unauthorized />;
  }

  // Render the CreateGalleryForm if the user is the owner
  return <CreateGalleryForm shipId={shipId} />;
};

export default AuthorizedCreateGalleryForm;
