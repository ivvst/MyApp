import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useContext } from 'react';
import AuthContext from '../contexts/authContext';
import Path from '../path';
import { Link } from 'react-router-dom';

const Navigation = () => {

    const {
        isAuthenticated,
        username,
    } = useContext(AuthContext)
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to={Path.Home}>UniWorld</Navbar.Brand>
                <Nav className="me-auto">
                    {isAuthenticated && (
                        <>
                           <Nav.Link  as={Link} to={Path.Catalog}>Catalog</Nav.Link>
                            <Nav.Link as={Link} to={Path.Create}>Create</Nav.Link>
                            <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                        </>

                    )}
                    {!isAuthenticated && (

                        <><Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/register">Register</Nav.Link>
                        </>
                    )}
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">{isAuthenticated ? (username) : 'Guest'}</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;