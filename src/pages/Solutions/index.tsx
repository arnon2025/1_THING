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

            {/* Industry Focus Section */}
            <section className="section bg-light-blue-soft">
                <Container>
                    <div className="section-title">
                        <h6 className="text-orange fw-bold text-uppercase mb-2">อุตสาหกรรมที่เราเชี่ยวชาญ</h6>
                        <h2>เจาะลึกทุกธุรกิจ</h2>
                    </div>
                    <Row className="g-4">
                        {[
                            { title: 'Retail & Service', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop', desc: 'ยกระดับประสบการณ์ลูกค้าด้วยข้อมูลการขาย' },
                            { title: 'Manufacturing', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop', desc: 'เพิ่มประสิทธิภาพการผลิตด้วยระบบ Automation' },
                            { title: 'Finance & Banking', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop', desc: 'ความปลอดภัยระดับสูงพร้อมการวิเคราะห์ความเสี่ยง' }
                        ].map((industry, idx) => (
                            <Col lg={4} key={idx}>
                                <div className="industry-card shadow-sm border-0">
                                    <div className="industry-img">
                                        <img src={industry.img} alt={industry.title} className="img-fluid rounded-top" />
                                    </div>
                                    <div className="industry-body p-4 bg-white rounded-bottom">
                                        <h5 className="mb-2">{industry.title}</h5>
                                        <p className="text-muted small mb-0">{industry.desc}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Solutions;
