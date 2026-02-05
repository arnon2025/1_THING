import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Services = () => {
    return (
        <div className="landing-page">
            <section className="page-header">
                <Container>
                    <div className="fade-in">
                        <h1 className="header-title">บริการของเรา</h1>
                        <p className="header-tagline">"YOUR BUSINESS SUCCESS IS OUR SUCCESS"</p>
                    </div>
                </Container>
            </section>

            <section className="section">
                <Container>
                    <Row className="g-4 justify-content-center">
                        <Col lg={6} xl={5}>
                            <div className="modern-card fade-in">
                                <div className="card-icon">
                                    <i className='bx bx-data'></i>
                                </div>
                                <h3 className="card-title">Data Analytics</h3>
                                <p className="card-description">
                                    วิเคราะห์ข้อมูลเชิงลึกด้วยเครื่องมือและเทคโนโลยีที่ทันสมัย
                                    ช่วยให้คุณเข้าใจธุรกิจและลูกค้าได้ดีขึ้น เพื่อการตัดสินใจที่แม่นยำยิ่งขึ้น
                                </p>
                                <ul className="mt-3" style={{ color: 'var(--text-light)' }}>
                                    <li>Business Intelligence</li>
                                    <li>Predictive Analytics</li>
                                    <li>Data Visualization</li>
                                    <li>Big Data Processing</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6} xl={5}>
                            <div className="modern-card fade-in" style={{ animationDelay: '0.1s' }}>
                                <div className="card-icon">
                                    <i className='bx bx-brain'></i>
                                </div>
                                <h3 className="card-title">AI & Machine Learning</h3>
                                <p className="card-description">
                                    ระบบปัญญาประดิษฐ์และการเรียนรู้ของเครื่องที่ช่วยให้ธุรกิจของคุณ
                                    ทำงานได้อัตโนมัติและมีประสิทธิภาพมากขึ้น
                                </p>
                                <ul className="mt-3" style={{ color: 'var(--text-light)' }}>
                                    <li>Natural Language Processing</li>
                                    <li>Computer Vision</li>
                                    <li>Recommendation Systems</li>
                                    <li>Process Automation</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6} xl={5}>
                            <div className="modern-card fade-in" style={{ animationDelay: '0.2s' }}>
                                <div className="card-icon">
                                    <i className='bx bx-cloud'></i>
                                </div>
                                <h3 className="card-title">Cloud Solutions</h3>
                                <p className="card-description">
                                    โซลูชันคลาวด์ที่ปลอดภัย รองรับการขยายตัว
                                    และช่วยลดต้นทุนการดำเนินงาน
                                </p>
                                <ul className="mt-3" style={{ color: 'var(--text-light)' }}>
                                    <li>Cloud Migration</li>
                                    <li>Infrastructure Management</li>
                                    <li>Multi-Cloud Strategy</li>
                                    <li>DevOps Implementation</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6} xl={5}>
                            <div className="modern-card fade-in" style={{ animationDelay: '0.3s' }}>
                                <div className="card-icon">
                                    <i className='bx bx-code-alt'></i>
                                </div>
                                <h3 className="card-title">Custom Development</h3>
                                <p className="card-description">
                                    พัฒนาซอฟต์แวร์ที่ตอบโจทย์ความต้องการเฉพาะของธุรกิจคุณ
                                    ด้วยทีมงานมืออาชีพ
                                </p>
                                <ul className="mt-3" style={{ color: 'var(--text-light)' }}>
                                    <li>Web Application Development</li>
                                    <li>Mobile App Development</li>
                                    <li>API Integration</li>
                                    <li>System Integration</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Services;
