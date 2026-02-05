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
                    <Row>
                        {[
                            {
                                date: '05 Feb 2026',
                                category: 'Technology',
                                title: 'แนวโน้มการใช้ AI ในภาคธุรกิจปี 2026',
                                desc: 'เจาะลึกเทคโนโลยี AI ที่จะเข้ามาเปลี่ยนโฉมการทำงานในปีนี้ พร้อมรับมือความเปลี่ยนแปลง...',
                                img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop'
                            },
                            {
                                date: '28 Jan 2026',
                                category: 'Infrastructure',
                                title: 'โครงสร้างพื้นฐาน Cloud สำหรับ Data Analytics',
                                desc: 'ทำไมการเลือก Cloud ที่ถูกต้องจึงสำคัญต่อความเร็วในการประมวลผลข้อมูลในยุค Big Data...',
                                img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop'
                            },
                            {
                                date: '15 Jan 2026',
                                category: 'Success Story',
                                title: 'Success Story: ปรับโฉมระบบค้าปลีกด้วย Data',
                                desc: 'กรณีศึกษาจากลูกค้าจริงที่สามารถเพิ่มยอดขายได้กว่า 30% ด้วยการวิเคราะห์ข้อมูลเชิงลึก...',
                                img: 'https://images.unsplash.com/photo-1556740734-756edeea7f09?q=80&w=800&auto=format&fit=crop'
                            },
                            {
                                date: '10 Jan 2026',
                                category: 'Event',
                                title: 'เปิดตัวความร่วมมือกับ Global Tech Partner',
                                desc: 'Things Analytic จับมือพันธมิตรระดับโลก เพื่อยกระดับการให้บริการในภูมิภาคเอเชีย...',
                                img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop'
                            },
                            {
                                date: '01 Jan 2026',
                                category: 'Career',
                                title: 'Things Analytic เปิดรับสมัครเพื่อนร่วมทีม!',
                                desc: 'เรากำลังมองหา Data Scientist และ AI Engineer มาร่วมสร้างอนาคตไปด้วยกัน...',
                                img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop'
                            }
                        ].map((news, idx) => (
                            <Col lg={4} md={6} key={idx} className="mb-4">
                                <div className="news-card-simple">
                                    <div className="news-img">
                                        <img src={news.img} alt={news.title} className="img-fluid" />
                                        <div className="news-date">{news.category}</div>
                                    </div>
                                    <div className="news-content">
                                        <p className="text-muted small mb-2"><i className="bx bx-calendar me-1"></i> {news.date}</p>
                                        <h5 className="mb-3">{news.title}</h5>
                                        <p className="text-muted small mb-4">{news.desc}</p>
                                        <a href="#!" className="btn-link">อ่านรายละเอียด <i className="bx bx-right-arrow-alt"></i></a>
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

export default News;
