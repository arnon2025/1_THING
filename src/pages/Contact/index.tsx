import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Contact = () => {
    return (
        <div className="landing-page">
            <section className="page-header">
                <Container>
                    <div className="fade-in">
                        <h1 className="header-title">ติดต่อเรา</h1>
                        <p className="header-tagline">"YOUR BUSINESS SUCCESS IS OUR SUCCESS"</p>
                    </div>
                </Container>
            </section>

            <section className="section">
                <Container>
                    <Row className="g-5 justify-content-center">
                        <Col lg={4} md={6}>
                            <div className="modern-card text-center fade-in">
                                <div className="card-icon mx-auto">
                                    <i className='bx bx-map'></i>
                                </div>
                                <h4 className="card-title">ที่อยู่</h4>
                                <p className="card-description">
                                    123 ถนนสีลม แขวงสุริยวงศ์<br />
                                    เขตบางรัก กรุงเทพฯ 10500<br />
                                    ประเทศไทย
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className="modern-card text-center fade-in" style={{ animationDelay: '0.1s' }}>
                                <div className="card-icon mx-auto">
                                    <i className='bx bx-phone'></i>
                                </div>
                                <h4 className="card-title">โทรศัพท์</h4>
                                <p className="card-description">
                                    Tel: 02-XXX-XXXX<br />
                                    Fax: 02-XXX-XXXX<br />
                                    Hotline: 0X-XXXX-XXXX
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className="modern-card text-center fade-in" style={{ animationDelay: '0.2s' }}>
                                <div className="card-icon mx-auto">
                                    <i className='bx bx-envelope'></i>
                                </div>
                                <h4 className="card-title">อีเมล</h4>
                                <p className="card-description">
                                    info@thingsanalytic.com<br />
                                    sales@thingsanalytic.com<br />
                                    support@thingsanalytic.com
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 justify-content-center">
                        <Col lg={10} xl={8}>
                            <div className="modern-card fade-in" style={{ animationDelay: '0.3s' }}>
                                <h3 className="card-title text-center mb-4">ส่งข้อความถึงเรา</h3>
                                <form>
                                    <Row className="g-3">
                                        <Col md={6}>
                                            <label className="form-label">ชื่อ-นามสกุล</label>
                                            <input type="text" className="form-control" placeholder="กรุณากรอกชื่อ-นามสกุล" />
                                        </Col>
                                        <Col md={6}>
                                            <label className="form-label">อีเมล</label>
                                            <input type="email" className="form-control" placeholder="กรุณากรอกอีเมล" />
                                        </Col>
                                        <Col md={12}>
                                            <label className="form-label">หัวข้อ</label>
                                            <input type="text" className="form-control" placeholder="กรุณากรอกหัวข้อ" />
                                        </Col>
                                        <Col md={12}>
                                            <label className="form-label">ข้อความ</label>
                                            <textarea className="form-control" rows={5} placeholder="กรุณากรอกข้อความ"></textarea>
                                        </Col>
                                        <Col md={12} className="text-center">
                                            <button type="submit" className="btn-primary-gradient">
                                                ส่งข้อความ
                                            </button>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Contact;
