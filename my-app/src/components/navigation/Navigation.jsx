import React, { useState, useContext, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Avatar, Popover, Divider } from 'antd';
import { MenuFoldOutlined } from '@ant-design/icons'

import { FaBars, FaHome, FaUser } from 'react-icons/fa';
import { MdLibraryBooks, MdCreate } from 'react-icons/md';
import AuthContext from '../../contexts/authContext';
import Path from '../../path';
import './nav.css'; // Make sure to adjust the path to your CSS file

const Navigation = () => {
  const [navVisible, setNavVisible] = useState(false);
  const { isAuthenticated, username } = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClose = () => setShowMenu(false);

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
  const guest = (
    <div>
      <Nav.Link as={Link} to="/login" className="nav-link-frame">
        Login
      </Nav.Link>
      <Nav.Link as={Link} to="/register" className="nav-link-frame">
        Register
      </Nav.Link>
    </div>
  );

  const user = (
    <div>
      <Nav.Link as={Link} to="/logout" className="nav-link-frame">
        Logout
      </Nav.Link>
    </div>
  );

  return (
    <Navbar className={`bg-light`} variant="light">
  <Nav className="me-auto" style={{ textAlign: 'center' }}>
      {isAuthenticated ? (
        <>
          <Nav.Link as={Link} to={Path.Catalog} className="nav-link-frame">
            <MdLibraryBooks /> Catalog
          </Nav.Link>
          <Nav.Link as={Link} to={Path.Create} className="nav-link-frame">
            <MdCreate /> Create
          </Nav.Link>
        </>
      ) : null}
    </Nav>
  
    <div style={{ marginLeft:"30em" }}>
      <img
        src='https://th.bing.com/th/id/R.e7fa57376bbba818719a3c56d47ccdc8?rik=yRF3vcLTwUxGAQ&riu=http%3a%2f%2fwww.mercicruises.com%2fstatic%2fimago%2f32%2fRiver_Cruise_Specialist_Logo.png&ehk=49e6TRtDlMjWqode%2fF57n2QLAKCBX4K5BhiIuZcSSKs%3d&risl=&pid=ImgRaw&r=0'
        width={250}
        alt="UniWorld Logo"
        
      />
    </div>
  
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text className="user-info">
        {isAuthenticated ? (
          <Popover content={user} trigger="hover">
            <span>Signed in as: <span>{username}</span> <Avatar src="https://cdn2.iconfinder.com/data/icons/people-79/100/Travel-03-512.png" alt={username} /></span>
          </Popover>
        ) : (
          <Popover content={guest} trigger="hover">
            <span>Guest <FaUser /></span>
          </Popover>
        )}
      </Navbar.Text>
    </Navbar.Collapse>
  
    
  </Navbar>
  )
}

export default Navigation;
