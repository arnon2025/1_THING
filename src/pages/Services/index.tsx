import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

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

            {/* Work Process Section */}
            <section className="section bg-light-blue-soft">
                <Container>
                    <div className="section-title">
                        <h6 className="text-orange fw-bold text-uppercase mb-2">กระบวนการทำงานของเรา</h6>
                        <h2>ขั้นตอนการส่งมอบคุณค่า</h2>
                    </div>
                    <Row className="justify-content-center">
                        {[
                            { step: '01', title: 'Consultation', desc: 'พูดคุยเพื่อทำความเข้าใจเป้าหมายและปัญหาของธุรกิจอย่างถ่องแท้', icon: 'bx-chat' },
                            { step: '02', title: 'Data Strategy', desc: 'วางแผนและออกแบบแนวทางการจัดการข้อมูลที่เหมาะสมที่สุด', icon: 'bx-map-alt' },
                            { step: '03', title: 'Implementation', desc: 'เริ่มกระบวนการพัฒนาและติดตั้งระบบด้วยความเชี่ยวชาญ', icon: 'bx-cog' },
                            { step: '04', title: 'Success', desc: 'ส่งมอบงานพร้อมการดูแลและประเมินผลอย่างต่อเนื่อง', icon: 'bx-rocket' }
                        ].map((item, idx) => (
                            <Col lg={3} md={6} key={idx} className="mb-4">
                                <div className="process-item text-center">
                                    <div className="process-step">{item.step}</div>
                                    <div className="process-icon-wrapper">
                                        <i className={`bx ${item.icon}`}></i>
                                    </div>
                                    <h5 className="mt-3">{item.title}</h5>
                                    <p className="text-muted small mb-0">{item.desc}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="section bg-blue text-white text-center py-5">
                <Container>
                    <h2 className="text-white mb-4">พร้อมเริ่มต้นโครงการกับเราแล้วหรือยัง?</h2>
                    <p className="opacity-75 mb-4">ปรึกษาผู้เชี่ยวชาญของเราวันนี้ ไม่มีค่าใช้จ่าย</p>
                    <Link to="/contact" className="btn-orange text-decoration-none">ติดต่อเราทันที</Link>
                </Container>
            </section>
        </div>
    );
};

export default Services;
