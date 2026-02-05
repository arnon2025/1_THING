import React from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="footer">
                <Container>
                    <Row>
                        <Col lg={4} className="mb-4">
                            <h4 className="footer-title">Things Analytic Co. Ltd</h4>
                            <p className="font-size-14">
                                Empowering businesses with cutting-edge technology solutions.
                            </p>
                        </Col>
                        <Col lg={2} md={6} className="mb-4">
                            <h5 className="footer-title">Company</h5>
                            <ul className="list-unstyled">
                                <li><Link to="/about" className="footer-link">About Us</Link></li>
                                <li><Link to="/contact" className="footer-link">Careers</Link></li>
                                <li><Link to="/contact" className="footer-link">Contact</Link></li>
                            </ul>
                        </Col>
                        <Col lg={2} md={6} className="mb-4">
                            <h5 className="footer-title">Resources</h5>
                            <ul className="list-unstyled">
                                <li><Link to="/news" className="footer-link">Blog</Link></li>
                                <li><Link to="/contact" className="footer-link">Help Center</Link></li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className="text-center mt-3">
                                <p className="mb-0">
                                    {new Date().getFullYear()} © Things Analytic Co. Ltd. Crafted with <i className="mdi mdi-heart text-danger"></i> by Things Analytic.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </React.Fragment>
    );
};

export default Footer;
