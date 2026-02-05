import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Solutions = () => {
    return (
        <div className="landing-page">
            <section className="page-header">
                <Container>
                    <div className="fade-in">
                        <h1 className="header-title">โซลูชั่น</h1>
                        <p className="header-tagline">"YOUR BUSINESS SUCCESS IS OUR SUCCESS"</p>
                    </div>
                </Container>
            </section>

            <section className="section">
                <Container>
                    <Row className="g-4 justify-content-center">
                        <Col lg={6}>
                            <div className="modern-card fade-in">
                                <div className="card-icon">
                                    <i className='bx bx-shopping-bag'></i>
                                </div>
                                <h3 className="card-title">E-Commerce Solutions</h3>
                                <p className="card-description">
                                    ระบบอีคอมเมิร์ซที่ครบวงจร พร้อมระบบการชำระเงินที่ปลอดภัย
                                    และการจัดการสินค้าที่มีประสิทธิภาพ
                                </p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="modern-card fade-in" style={{ animationDelay: '0.1s' }}>
                                <div className="card-icon">
                                    <i className='bx bx-line-chart'></i>
                                </div>
                                <h3 className="card-title">Business Intelligence</h3>
                                <p className="card-description">
                                    แดชบอร์ดและรายงานที่ช่วยให้คุณเห็นภาพรวมของธุรกิจ
                                    และตัดสินใจได้อย่างรวดเร็วและแม่นยำ
                                </p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="modern-card fade-in" style={{ animationDelay: '0.2s' }}>
                                <div className="card-icon">
                                    <i className='bx bx-buildings'></i>
                                </div>
                                <h3 className="card-title">Enterprise Solutions</h3>
                                <p className="card-description">
                                    ระบบองค์กรแบบครบวงจร ตั้งแต่ ERP, CRM ไปจนถึงระบบบริหารจัดการองค์กร
                                </p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="modern-card fade-in" style={{ animationDelay: '0.3s' }}>
                                <div className="card-icon">
                                    <i className='bx bx-chip'></i>
                                </div>
                                <h3 className="card-title">IoT Solutions</h3>
                                <p className="card-description">
                                    โซลูชัน Internet of Things ที่เชื่อมต่ออุปกรณ์และระบบต่างๆ
                                    เพื่อการทำงานที่อัจฉริยะ
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Solutions;
