import React from 'react';
import { Container, Row, Col } from "reactstrap";

const Services = () => {
    const services = [
        { title: "Digital Strategy", desc: "We formulate strategies to help you reach your digital goals.", icon: "bx bx-bulb" },
        { title: "App Development", desc: "Building robust and scalable applications for your needs.", icon: "bx bx-mobile-alt" },
        { title: "Cloud Solutions", desc: "Secure and efficient cloud infrastructure services.", icon: "bx bx-cloud" },
    ];

    return (
        <React.Fragment>
            <section className="services-section" id="services">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="text-center mb-5">
                                <h3>Our Services</h3>
                                <p className="text-muted">What we offer to our clients</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {services.map((service, key) => (
                            <Col lg={4} key={key}>
                                <div className="service-box">
                                    <div className="service-icon mb-3">
                                        <i className={service.icon}></i>
                                    </div>
                                    <h5 className="mb-3">{service.title}</h5>
                                    <p className="text-muted mb-0">{service.desc}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Services;
