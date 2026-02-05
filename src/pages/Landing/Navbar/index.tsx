import React, { useState, useEffect } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    Container,
} from "reactstrap";
import { Link } from "react-router-dom";

const LandingNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <React.Fragment>
            <Navbar
                expand="lg"
                fixed="top"
                className={"navbar-custom " + (isSticky ? "sticky" : "")}
            >
                <Container>
                    <NavbarBrand className="logo text-uppercase" href="/">
                        <span className="logo-light" style={{ color: 'white', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                            <img src={require("../../../assets/images/logo.png")} alt="" height="30" className="me-2" />
                            Things Analytic
                        </span>
                        <span className="logo-dark" style={{ color: '#333', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                            <img src={require("../../../assets/images/logo.png")} alt="" height="30" className="me-2" />
                            Things Analytic
                        </span>
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ms-auto navbar-nav" navbar>
                            <NavItem>
                                <NavLink href="#hero">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#services">Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#about">About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <Link to="/login" className="nav-link">Log In</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    );
};

export default LandingNavbar;
