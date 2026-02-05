import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const About = () => {
    return (
        <React.Fragment>
            <section className="page-header">
                <Container>
                    <div className="fade-in">
                        <h1 className="header-title">เกี่ยวกับเรา</h1>
                        <p className="header-tagline">"YOUR BUSINESS SUCCESS IS OUR SUCCESS"</p>
                    </div>
                </Container>
            </section>

            <section className="section">
                <Container>
                    <Row className="align-items-center g-5 justify-content-center">
                        <Col lg={10} xl={9}>
                            <div className="text-center mb-5">
                                <h3 className="text-primary-blue mb-4">ประวัติความเป็นมา</h3>
                                <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    Things Analytic ก่อตั้งขึ้นด้วยวิสัยทัศน์ในการนำเทคโนโลยีที่ทันสมัย
                                    มาช่วยให้ธุรกิจต่างๆ สามารถใช้ข้อมูลในการตัดสินใจได้อย่างมีประสิทธิภาพ
                                </p>
                                <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    เรามีประสบการณ์กว่า 15 ปี ในการให้บริการด้านการวิเคราะห์ข้อมูล
                                    การพัฒนาระบบ และการให้คำปรึกษาด้านเทคโนโลยี
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="g-4 mt-3 justify-content-center">
                        <Col md={4}>
                            <div className="modern-card text-center fade-in">
                                <div className="card-icon mx-auto">
                                    <i className='bx bx-target-lock'></i>
                                </div>
                                <h4 className="card-title">วิสัยทัศน์</h4>
                                <p className="card-description">
                                    เป็นผู้นำด้านเทคโนโลยีและนวัตกรรมในภูมิภาคเอเชียตะวันออกเฉียงใต้
                                </p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="modern-card text-center fade-in" style={{ animationDelay: '0.1s' }}>
                                <div className="card-icon mx-auto">
                                    <i className='bx bx-trophy'></i>
                                </div>
                                <h4 className="card-title">คุณภาพ</h4>
                                <p className="card-description">
                                    ยึดมั่นในการส่งมอบผลงานคุณภาพสูงสุดด้วยมาตรฐานสากล
                                </p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="modern-card text-center fade-in" style={{ animationDelay: '0.2s' }}>
                                <div className="card-icon mx-auto">
                                    <i className='bx bx-group'></i>
                                </div>
                                <h4 className="card-title">ทีมงาน</h4>
                                <p className="card-description">
                                    ผู้เชี่ยวชาญที่มีประสบการณ์และความเชี่ยวชาญในสายงาน
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Core Values Section */}
            <section className="section bg-light-blue-soft">
                <Container>
                    <div className="section-title">
                        <h2>ค่านิยมหลักของเรา</h2>
                        <p className="text-muted">สิ่งที่เป็นรากฐานในการส่งมอบความสำเร็จให้ลูกค้า</p>
                    </div>
                    <Row className="g-4">
                        {[
                            { title: 'Innovation', desc: 'มุ่งมั่นสร้างสรรค์นวัตกรรมใหม่ๆ อยู่เสมอ', icon: 'bx-bulb' },
                            { title: 'Integrity', desc: 'ดำเนินงานด้วยความโปร่งใสและซื่อสัตย์', icon: 'bx-shield-check' },
                            { title: 'Client Success', desc: 'ความสำเร็จของลูกค้าคือเป้าหมายสูงสุดของเรา', icon: 'bx-trending-up' },
                            { title: 'Agility', desc: 'ปรับตัวรวดเร็วเข้ากับทุกความล้ำสมัยของเทคโนโลยี', icon: 'bx-run' }
                        ].map((value, idx) => (
                            <Col lg={3} md={6} key={idx}>
                                <div className="value-item text-center">
                                    <div className="value-icon">
                                        <i className={`bx ${value.icon}`}></i>
                                    </div>
                                    <h5 className="mt-3">{value.title}</h5>
                                    <p className="text-muted small">{value.desc}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Team Section */}
            <section className="section">
                <Container>
                    <div className="section-title">
                        <h2>ทีมผู้บริหาร</h2>
                        <p className="text-muted">ทีมงานผู้เชี่ยวชาญเบื้องหลังความสำเร็จของ Things Analytic</p>
                    </div>
                    <Row className="justify-content-center">
                        {[
                            { name: 'สมชาย รักข้อมูล', role: 'CEO & Founder', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop' },
                            { name: 'วิภาวี นวัตกรรม', role: 'CTO', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop' },
                            { name: 'มานะ เทคโนโลยี', role: 'Head of Data Science', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop' }
                        ].map((member, idx) => (
                            <Col lg={3} md={6} key={idx} className="mb-4 text-center">
                                <div className="team-card">
                                    <div className="team-img-wrapper mb-3">
                                        <img src={member.img} alt={member.name} className="img-fluid rounded-circle" />
                                    </div>
                                    <h5 className="mb-1">{member.name}</h5>
                                    <p className="text-orange small fw-bold">{member.role}</p>
                                    <div className="team-social">
                                        <a href="#"><i className="bx bxl-linkedin"></i></a>
                                        <a href="#"><i className="bx bxl-twitter"></i></a>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default About;
