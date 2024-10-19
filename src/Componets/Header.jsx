import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <>
            <header>
                <Navbar expand="lg" className="home">
                    <Container>
                        <Navbar.Brand href="/">GIGWORK</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <Nav className="">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="#services">Services</Nav.Link>
                                <Nav.Link href="#community">Download</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    )

}
export default Header;