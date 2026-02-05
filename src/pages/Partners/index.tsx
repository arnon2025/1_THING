import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Partners = () => {
    return (
        <div className="landing-page">
            <section className="page-header">
                <Container>
                    <div className="fade-in">
                        <h1 className="header-title">พันธมิตร</h1>
                        <p className="header-tagline">"YOUR BUSINESS SUCCESS IS OUR SUCCESS"</p>
                    </div>
                </Container>
            </section>

            <section className="section">
                <Container>
                    <div className="text-center mb-5 fade-in">
                        <h3 className="text-primary-blue mb-4">เครือข่ายพันธมิตรระดับโลก</h3>
                        <p className="text-muted" style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
                            เราร่วมมือกับผู้ให้บริการเทคโนโลยีชั้นนำระดับโลก
                            เพื่อมอบโซลูชันที่ดีที่สุดให้กับลูกค้า
                        </p>
                    </div>

                    <Row className="g-4 justify-content-center">
                        <Col lg={4} md={6}>
                            <div className="modern-card text-center fade-in">
                                <div className="card-icon mx-auto">
                                    <i className='bx bxl-microsoft'></i>
                                </div>
                                <h4 className="card-title">Microsoft Partner</h4>
                                <p className="card-description">
                                    พันธมิตรด้าน Azure Cloud และ Office 365
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className="modern-card text-center fade-in" style={{ animationDelay: '0.1s' }}>
                                <div className="card-icon mx-auto">
                                    <i className='bx bxl-google-cloud'></i>
                                </div>
                                <h4 className="card-title">Google Cloud Partner</h4>
                                <p className="card-description">
                                    พันธมิตรด้าน Google Cloud Platform และ AI
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className="modern-card text-center fade-in" style={{ animationDelay: '0.2s' }}>
                                <div className="card-icon mx-auto">
                                    <i className='bx bxl-aws'></i>
                                </div>
                                <h4 className="card-title">AWS Partner</h4>
                                <p className="card-description">
                                    พันธมิตรด้าน Amazon Web Services
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className="modern-card text-center fade-in" style={{ animationDelay: '0.3s' }}>
                                <div className="card-icon mx-auto">
                                    <i className='bx bx-code-block'></i>
                                </div>
                                <h4 className="card-title">Technology Partners</h4>
                                <p className="card-description">
                                    พันธมิตรด้านเทคโนโลยีและซอฟต์แวร์
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className="modern-card text-center fade-in" style={{ animationDelay: '0.4s' }}>
                                <div className="card-icon mx-auto">
                                    <i className='bx bx-globe'></i>
                                </div>
                                <h4 className="card-title">Global Partners</h4>
                                <p className="card-description">
                                    เครือข่ายพันธมิตรระดับโลก
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className="modern-card text-center fade-in" style={{ animationDelay: '0.5s' }}>
                                <div className="card-icon mx-auto">
                                    <i className='bx bx-handshake'></i>
                                </div>
                                <h4 className="card-title">Strategic Alliance</h4>
                                <p className="card-description">
                                    พันธมิตรเชิงกลยุทธ์ในภูมิภาคเอเชีย
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <div className="mt-5 text-center fade-in" style={{ animationDelay: '0.6s' }}>
                        <div className="modern-card">
                            <h4 className="text-primary-blue mb-4">สนใจเป็นพันธมิตรกับเรา?</h4>
                            <p className="text-muted mb-4">
                                เราเปิดรับพันธมิตรทางธุรกิจที่มีวิสัยทัศน์เดียวกัน
                                ติดต่อเราเพื่อหารือโอกาสความร่วมมือ
                            </p>
                            <a href="/contact" className="btn-primary-gradient">
                                ติดต่อเรา
                            </a>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Partners;
