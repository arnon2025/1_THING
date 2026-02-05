import React from 'react';
import { Container, Row, Col } from "reactstrap";

const AboutUs = () => {
    return (
        <React.Fragment>
            <section className="about-section" id="about">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            {/* Placeholder for About Image */}
                            <div style={{ height: '300px', background: '#e0e0e0', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span className="text-muted">About Image</span>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="ms-lg-5 mt-4 mt-lg-0">
                                <h3 className="mb-3">About Us</h3>
                                <p className="text-muted mb-4">
                                    We are dedicated to providing the best service to our customers.
                                    With years of experience in the industry, we understand your unique needs
                                    and tailor our solutions to match them perfectly.
                                </p>
                                <p className="text-muted">
                                    Our team consists of experts in various fields, all working together
                                    to deliver excellence.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default AboutUs;
