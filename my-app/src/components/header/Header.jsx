import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import AuthContext from '../../contexts/authContext';
import { useContext } from 'react';


import Catalog from '../catalog/Catalog';

import "./Header.css"






const Header = () => {

  const {
    isAuthenticated,
    username,
  } = useContext(AuthContext)
  return (

   <></>




  );
}

export default Header;


