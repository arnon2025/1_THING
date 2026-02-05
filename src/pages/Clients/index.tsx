import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Clients = () => {
    return (
        <div className="landing-page">
            <section className="section section-bg-light">
                <Container>
                    <div className="section-title fade-in">
                        <h2>ลูกค้าของเรา</h2>
                        <p>ความไว้วางใจจากลูกค้าคือความภาคภูมิใจของเรา</p>
                    </div>
                </Container>
            </section>

            <section className="section">
                <Container>
                    <div className="text-center mb-5 fade-in">
                        <h3 className="text-primary-blue mb-4">องค์กรชั้นนำที่ไว้วางใจเรา</h3>
                        <p className="text-muted mx-auto" style={{ fontSize: '1.1rem', maxWidth: '800px' }}>
                            เรามีความภูมิใจที่ได้ให้บริการกับองค์กรชั้นนำมากมาย
                            ทั้งในภาครัฐและเอกชน ทั้งในและต่างประเทศ
                        </p>
                    </div>

                    <Row className="g-4 justify-content-center">
                        <Col lg={3} md={4} sm={6}>
                            <div className="modern-card text-center fade-in">
                                <div style={{
                                    height: '120px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '3rem',
                                    color: 'var(--primary-blue)'
                                }}>
                                    <i className='bx bx-building'></i>
                                </div>
                                <h5 className="mt-3">บริษัทชั้นนำ A</h5>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6}>
                            <div className="modern-card text-center fade-in" style={{ animationDelay: '0.1s' }}>
                                <div style={{
                                    height: '120px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '3rem',
                                    color: 'var(--accent-orange)'
                                }}>
                                    <i className='bx bx-store'></i>
                                </div>
                                <h5 className="mt-3">บริษัทชั้นนำ B</h5>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6}>
                            <div className="modern-card text-center fade-in" style={{ animationDelay: '0.2s' }}>
                                <div style={{
                                    height: '120px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '3rem',
                                    color: 'var(--primary-blue)'
                                }}>
                                    <i className='bx bx-buildings'></i>
                                </div>
                                <h5 className="mt-3">บริษัทชั้นนำ C</h5>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6}>
                            <div className="modern-card text-center fade-in" style={{ animationDelay: '0.3s' }}>
                                <div style={{
                                    height: '120px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '3rem',
                                    color: 'var(--accent-orange)'
                                }}>
                                    <i className='bx bx-shopping-bag'></i>
                                </div>
                                <h5 className="mt-3">บริษัทชั้นนำ D</h5>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 justify-content-center">
                        <Col lg={10} xl={8}>
                            <div className="modern-card text-center fade-in" style={{ animationDelay: '0.4s', backgroundColor: '#f8f9fa', border: 'none' }}>
                                <h4 className="text-primary-blue mb-3">
                                    <i className='bx bx-smile me-2'></i>
                                    ความพึงพอใจของลูกค้า
                                </h4>
                                <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
                                    <div>
                                        <h2 className="text-gradient mb-0" style={{ color: '#FF9500' }}>98%</h2>
                                        <p className="text-muted mb-0">ความพึงพอใจ</p>
                                    </div>
                                    <div>
                                        <h2 className="text-gradient mb-0" style={{ color: '#FF9500' }}>95%</h2>
                                        <p className="text-muted mb-0">ใช้บริการซ้ำ</p>
                                    </div>
                                    <div>
                                        <h2 className="text-gradient mb-0" style={{ color: '#FF9500' }}>4.9/5</h2>
                                        <p className="text-muted mb-0">คะแนนรีวิว</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Clients;
