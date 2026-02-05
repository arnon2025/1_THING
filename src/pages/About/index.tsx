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
        </React.Fragment>
    );
};

export default About;
