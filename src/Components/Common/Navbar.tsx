import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [sticky, setSticky] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Navbar
            expand="lg"
            fixed="top"
            className={`navbar-custom ${sticky ? 'sticky' : ''}`}
        >
            <Container className="d-flex align-items-center">
                <NavbarBrand tag={Link} to="/" className="me-0">
                    <img src={logo} alt="Things Analytic Logo" height="50" className="logo-img" />
                </NavbarBrand>

                <NavbarToggler onClick={toggle} className="ms-auto" />

                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ms-auto align-items-center" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/" className="active">หลัก</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/about">เกี่ยวกับเรา</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/services">บริการของเรา</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/solutions">โซลูชั่น</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/news">ข่าวสาร&กิจกรรม</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/clients">ลูกค้า</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/partners">พันธมิตร</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/contact">ติดต่อเรา</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
