import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <React.Fragment>
            {/* Hero Section */}
            <section className="hero-section">
                <Container>
                    <Row className="align-items-center justify-content-center">
                        <Col lg={10} xl={8} className="text-center">
                            <h1 className="hero-title">
                                Things <span>Analytic</span> <br />
                                การวิเคราะห์ข้อมูลที่ทรงพลัง
                            </h1>
                            <p className="hero-desc mx-auto">
                                เราให้บริการโซลูชันด้านการวิเคราะห์ข้อมูลและเทคโนโลยีที่ล้ำสมัย
                                เพื่อให้ธุรกิจของคุณเติบโตอย่างมั่นคงและยั่งยืนในยุคดิจิทัล
                            </p>
                            <div className="hero-btn d-flex justify-content-center gap-3 flex-wrap">
                                <Button tag={Link} to="/contact" className="btn-orange">
                                    ติดต่อเราทันที
                                </Button>
                                <Button tag={Link} to="/services" className="btn-outline-white">
                                    บริการของเรา
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Services Section */}
            <section className="section services-section">
                <Container>
                    <div className="section-title">
                        <h2>บริการของเรา</h2>
                        <p className="text-muted">โซลูชันที่ครอบคลุมทุกความต้องการด้านข้อมูลและเทคโนโลยี</p>
                    </div>
                    <Row className="justify-content-center">
                        {[
                            { icon: 'bx-bar-chart-square', title: 'การวิเคราะห์ข้อมูล', desc: 'วิเคราะห์ข้อมูลเชิงลึกด้วยเทคโนโลยี AI เพื่อหาโอกาสทางธุรกิจใหม่ๆ' },
                            { icon: 'bx-cloud', title: 'Cloud Solutions', desc: 'โครงสร้างพื้นฐานคลาวด์ที่มีประสิทธิภาพ ปลอดภัย และยืดหยุ่น' },
                            { icon: 'bx-brain', title: 'AI & Automation', desc: 'เพิ่มประสิทธิภาพการทำงานด้วยระบบอัตโนมัติอัจฉริยะ' },
                            { icon: 'bx-mobile-alt', title: 'Mobile Development', desc: 'พัฒนาโมบายแอปพลิเคชันที่ตอบโจทย์ผู้ใช้งานยุคใหม่' },
                            { icon: 'bx-shield-quarter', title: 'Cybersecurity', desc: 'ยกระดับความปลอดภัยให้กับข้อมูลและระบบงานของคุณ' },
                            { icon: 'bx-support', title: '24/7 Support', desc: 'ทีมงานผู้เชี่ยวชาญพร้อมดูแลระบบให้คุณตลอด 24 ชั่วโมง' }
                        ].map((service, idx) => (
                            <Col lg={4} md={6} key={idx} className="mb-4">
                                <div className="service-card">
                                    <div className="icon-box">
                                        <i className={`bx ${service.icon}`}></i>
                                    </div>
                                    <h4>{service.title}</h4>
                                    <p>{service.desc}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={3} sm={6}>
                            <div className="stat-item text-center">
                                <h2>500+</h2>
                                <p>โปรเจกต์ที่สำเร็จ</p>
                            </div>
                        </Col>
                        <Col md={3} sm={6}>
                            <div className="stat-item text-center">
                                <h2>200+</h2>
                                <p>ลูกค้าพึงพอใจ</p>
                            </div>
                        </Col>
                        <Col md={3} sm={6}>
                            <div className="stat-item text-center">
                                <h2>15+</h2>
                                <p>ปีประสบการณ์</p>
                            </div>
                        </Col>
                        <Col md={3} sm={6}>
                            <div className="stat-item text-center">
                                <h2>50+</h2>
                                <p>ทีมผู้เชี่ยวชาญ</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
            `}</style>
        </React.Fragment>
    );
};

export default Home;
