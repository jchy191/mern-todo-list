import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = (props) => {

    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Container fluid className="mx-4">
                <Navbar.Brand href="#home">To-Do App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to='/signup'>Sign Up</Nav.Link>
                        <Nav.Link as={Link} to='/signin'>Sign In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            
        </Navbar>
    )
}

export default Header;