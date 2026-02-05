import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const News = () => {
    return (
        <React.Fragment>
            <section className="page-header">
                <Container>
                    <div className="fade-in">
                        <h1 className="header-title">ข่าวสาร & กิจกรรม</h1>
                        <p className="header-tagline">"YOUR BUSINESS SUCCESS IS OUR SUCCESS"</p>
                    </div>
                </Container>
            </section>

            <section className="section">
                <Container>
                    <Row className="g-4 justify-content-center">
                        <Col lg={4} md={6}>
                            <div className="modern-card fade-in">
                                <div style={{
                                    height: '200px',
                                    background: 'var(--gradient-primary)',
                                    borderRadius: 'var(--radius-md)',
                                    marginBottom: '1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: '3rem'
                                }}>
                                    <i className='bx bx-news'></i>
                                </div>
                                <h4 className="card-title">เปิดตัวบริการใหม่</h4>
                                <p className="text-muted mb-2">
                                    <small><i className='bx bx-calendar me-2'></i>1 กุมภาพันธ์ 2567</small>
                                </p>
                                <p className="card-description">
                                    เราภูมิใจที่จะประกาศเปิดตัวบริการ AI Analytics ที่จะช่วยให้ธุรกิจของคุณ
                                    วิเคราะห์ข้อมูลได้อย่างชาญฉลาดมากขึ้น
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className="modern-card fade-in" style={{ animationDelay: '0.1s' }}>
                                <div style={{
                                    height: '200px',
                                    background: 'var(--gradient-accent)',
                                    borderRadius: 'var(--radius-md)',
                                    marginBottom: '1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: '3rem'
                                }}>
                                    <i className='bx bx-award'></i>
                                </div>
                                <h4 className="card-title">รางวัลยอดเยี่ยม</h4>
                                <p className="text-muted mb-2">
                                    <small><i className='bx bx-calendar me-2'></i>15 มกราคม 2567</small>
                                </p>
                                <p className="card-description">
                                    Things Analytic ได้รับรางวัล "Best Analytics Solution Provider"
                                    ประจำปี 2567
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className="modern-card fade-in" style={{ animationDelay: '0.2s' }}>
                                <div style={{
                                    height: '200px',
                                    background: 'var(--gradient-primary)',
                                    borderRadius: 'var(--radius-md)',
                                    marginBottom: '1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: '3rem'
                                }}>
                                    <i className='bx bx-slideshow'></i>
                                </div>
                                <h4 className="card-title">สัมมนาเทคโนโลยี</h4>
                                <p className="text-muted mb-2">
                                    <small><i className='bx bx-calendar me-2'></i>10 ธันวาคม 2566</small>
                                </p>
                                <p className="card-description">
                                    จัดสัมมนา "Digital Transformation 2024" พร้อมผู้เชี่ยวชาญชั้นนำ
                                    กว่า 500 คน
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default News;
