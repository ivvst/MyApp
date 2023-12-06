import React, { useState, useContext, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { FaBars, FaHome, FaUser } from 'react-icons/fa';
import { MdPerson,MdLibraryBooks,MdCreate } from 'react-icons/md';
import AuthContext from '../../contexts/authContext';
import Path from '../../path';
import './nav.css'; // Make sure to adjust the path to your CSS file

const Navigation = () => {
  const [navVisible, setNavVisible] = useState(false);
  const { isAuthenticated, username } = useContext(AuthContext);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setNavVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const mobileMenu = () => {
    setNavVisible(!navVisible);
  };

  return (
    <Navbar className={`bg-dark ${navVisible ? 'nav-visible' : ''}`} variant="dark">
      <Navbar.Brand as={Link} to={Path.Home}>
        UniWorld
      </Navbar.Brand>
      <Nav className="me-auto">
        {isAuthenticated && (
          <>
            <Nav.Link as={Link} to={Path.Catalog} className="nav-link-frame">
              <MdLibraryBooks /> Catalog
            </Nav.Link>
            <Nav.Link as={Link} to={Path.Create} className="nav-link-frame">
              <MdCreate /> Create
            </Nav.Link>
            <Nav.Link as={Link} to="/logout" className="nav-link-frame">
              Logout
            </Nav.Link>
          </>
        )}
        {!isAuthenticated && (
          <>
            <Nav.Link href="/login" className="nav-link-frame">
              Login
            </Nav.Link>
            <Nav.Link href="/register" className="nav-link-frame">
              Register
            </Nav.Link>
          </>
        )}
      </Nav>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="user-info">
          Signed in as: <span>{isAuthenticated ? username : 'Guest'}</span> <FaUser />
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
