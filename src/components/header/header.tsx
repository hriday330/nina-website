import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";


const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect fixed = 'top' expand = 'sm' bg = 'success' variant = 'dark'>
                <Container>
                    <Navbar.Toggle aria-controls = 'responsive-navbar-nav'/>
                    <Navbar.Collapse id = 'responsive-navbar-nav'>
                        <Nav>
                            <Nav.Link href = "/">Home</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header

