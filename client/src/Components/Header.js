import React, {useContext} from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Context} from '../Context.js'

const Header = (props) => {

    const context = useContext(Context);
    let rightHeader;
    if (context.authUser === null) {
        rightHeader = (
            <Nav className="ml-auto">
            <Nav.Link as={Link} to='/signup'>Sign Up</Nav.Link>
            <Nav.Link as={Link} to='/signin'>Sign In</Nav.Link>
            </Nav>
        )
    } else {
        rightHeader = (
            <Nav className="ml-auto">
                <Navbar.Text className="mr-2">Hello, {context.authUser.name}</Navbar.Text>
                <Nav.Link as={Link} to='/signout'>Sign Out</Nav.Link>
            </Nav>
        )
    }

    return (
        <Navbar bg="dark" variant="dark" expand="sm">
            <Container fluid className="mx-4">
                <Navbar.Brand href="/">To-Do App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {rightHeader}
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    )
}

export default Header;