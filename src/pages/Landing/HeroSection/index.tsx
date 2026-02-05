import React from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <React.Fragment>
            <section className="hero-section" id="hero">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="text-white-50">
                                <h1 className="text-white font-weight-semibold mb-3 hero-title">
                                    Things Analytic <br /> IoT & Data Solutions
                                </h1>
                                <p className="font-size-16 mb-4">
                                    Unlock the power of your data with Things Analytic.
                                    We provide advanced IoT and analytics solutions for modern businesses.
                                </p>
                                <Link to="/register" className="btn btn-primary me-2">
                                    Get Started <i className="mdi mdi-arrow-right ms-1"></i>
                                </Link>
                                <Link to="/contact" className="btn btn-light">Contact Us</Link>
                            </div>
                        </Col>
                        <Col lg={5} className="ms-auto text-center">
                            {/* Placeholder for Hero Image */}
                            <div style={{ height: '300px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span className="text-white">Hero Image</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default HeroSection;
