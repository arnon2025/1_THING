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

            {/* Why Choose Us Section */}
            <section className="section bg-light-blue-soft">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="pe-lg-5">
                                <h6 className="text-orange fw-bold text-uppercase mb-3">ทำไมต้องเลือกเรา?</h6>
                                <h2 className="display-5 fw-bold mb-4">เราช่วยให้ธุรกิจของคุณ <br />ก้าวข้ามทุกขีดจำกัดด้วยข้อมูล</h2>
                                <p className="text-muted mb-5">
                                    ด้วยประสบการณ์ที่ยาวนานและทีมผู้เชี่ยวชาญระดับแนวหน้า เราไม่ได้เพียงแค่ส่งมอบเทคโนโลยี
                                    แต่เราส่งมอบ "ความสำเร็จ" ที่วัดผลได้จริงให้กับทุกธุรกิจที่เราดูแล
                                </p>

                                <div className="choose-us-list">
                                    {[
                                        { title: 'ความเชี่ยวชาญเฉพาะทาง', desc: 'เรามีทีมงานที่เชี่ยวชาญด้าน Data Science และ AI โดยเฉพาะ' },
                                        { title: 'โซลูชันที่ปรับแต่งได้', desc: 'ออกแบบระบบให้ตอบโจทย์ธุรกิจของคุณแบบ 100%' },
                                        { title: 'การสนับสนุนที่เหนือกว่า', desc: 'เราอยู่เคียงข้างคุณทุกขั้นตอน ตั้งแต่วางแผนจนถึงการดูแลหลังการขาย' }
                                    ].map((item, idx) => (
                                        <div className="d-flex mb-4" key={idx}>
                                            <div className="flex-shrink-0">
                                                <div className="check-icon">
                                                    <i className="bx bx-check"></i>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h5 className="mb-1">{item.title}</h5>
                                                <p className="text-muted mb-0">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="image-container mt-5 mt-lg-0">
                                <img
                                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop"
                                    alt="Expert Team"
                                    className="img-fluid rounded-4 shadow-lg"
                                />
                                <div className="experience-badge shadow-lg">
                                    <h3 className="mb-0">15+</h3>
                                    <span>ปีแห่งความสำเร็จ</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* News Section Preview */}
            <section className="section bg-white">
                <Container>
                    <div className="section-title">
                        <h6 className="text-orange fw-bold text-uppercase mb-2">อัปเดตความเคลื่อนไหว</h6>
                        <h2>ข่าวสารและบทความ</h2>
                    </div>
                    <Row>
                        {[
                            {
                                date: '05 Feb 2026',
                                title: 'แนวโน้มการใช้ AI ในภาคธุรกิจปี 2026',
                                desc: 'เจาะลึกเทคโนโลยี AI ที่จะเข้ามาเปลี่ยนโฉมการทำงานในปีนี้...',
                                img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop'
                            },
                            {
                                date: '28 Jan 2026',
                                title: 'โครงสร้างพื้นฐาน Cloud สำหรับ Data Analytics',
                                desc: 'ทำไมการเลือก Cloud ที่ถูกต้องจึงสำคัญต่อความเร็วในการประมวลผลข้อมูล...',
                                img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop'
                            },
                            {
                                date: '15 Jan 2026',
                                title: 'Success Story: ปรับโฉมระบบค้าปลีกด้วย Data',
                                desc: 'กรณีศึกษาจากลูกค้าจริงที่สามารถเพิ่มยอดขายได้กว่า 30% ด้วยการวิเคราะห์ข้อมูล...',
                                img: 'https://images.unsplash.com/photo-1556740734-756edeea7f09?q=80&w=800&auto=format&fit=crop'
                            }
                        ].map((news, idx) => (
                            <Col lg={4} md={6} key={idx} className="mb-4">
                                <div className="news-card-simple">
                                    <div className="news-img">
                                        <img src={news.img} alt={news.title} className="img-fluid" />
                                        <div className="news-date">{news.date}</div>
                                    </div>
                                    <div className="news-content">
                                        <h5><Link to="/news" className="text-decoration-none text-dark hover-blue">{news.title}</Link></h5>
                                        <p className="text-muted small">{news.desc}</p>
                                        <Link to="/news" className="btn-link">อ่านเพิ่มเติม <i className="bx bx-right-arrow-alt"></i></Link>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <div className="text-center mt-5">
                        <Button tag={Link} to="/news" className="btn-outline-blue px-5 rounded-pill">
                            ดูข่าวทั้งหมด
                        </Button>
                    </div>
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
