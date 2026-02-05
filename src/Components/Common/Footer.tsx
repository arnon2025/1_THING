import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Footer = () => {
    return (
        <div className="landing-page">
            <footer className="footer">
                <Container>
                    <Row>
                        <Col lg={4} className="mb-4 mb-lg-0">
                            <img src={logo} alt="Things Analytic" height="40" className="footer-logo mb-4" />
                            <p className="mb-4">
                                Things Analytic ผู้นำด้านการวิเคราะห์ข้อมูลและนวัตกรรมเทคโนโลยี
                                เรามุ่งมั่นส่งมอบผลงานคุณภาพเพื่อขับเคลื่อนธุรกิจสู่ความสำเร็จ
                            </p>
                            <div className="social-icons">
                                <a href="#!"><i className="bx bxl-facebook"></i></a>
                                <a href="#!"><i className="bx bxl-twitter"></i></a>
                                <a href="#!"><i className="bx bxl-linkedin"></i></a>
                                <a href="#!"><i className="bx bxl-instagram"></i></a>
                            </div>
                        </Col>
                        <Col lg={4} className="mb-4 mb-lg-0">
                            <h5 className="footer-title">ลิงก์ที่สำคัญ</h5>
                            <Row>
                                <Col sm={6}>
                                    <Link to="/" className="footer-link">หน้าหลัก</Link>
                                    <Link to="/about" className="footer-link">เกี่ยวกับเรา</Link>
                                    <Link to="/services" className="footer-link">บริการ</Link>
                                </Col>
                                <Col sm={6}>
                                    <Link to="/news" className="footer-link">ข่าวสาร</Link>
                                    <Link to="/contact" className="footer-link">ติดต่อเรา</Link>
                                    <Link to="/solutions" className="footer-link">โซลูชั่น</Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={4}>
                            <h5 className="footer-title">ข้อมูลการติดต่อ</h5>
                            <div className="contact-info">
                                <i className="bx bx-map"></i>
                                <span>กรุงเทพมหานคร ประเทศไทย</span>
                            </div>
                            <div className="contact-info">
                                <i className="bx bx-phone"></i>
                                <span>02-XXX-XXXX</span>
                            </div>
                            <div className="contact-info">
                                <i className="bx bx-envelope"></i>
                                <span>info@thingsanalytic.com</span>
                            </div>
                        </Col>
                    </Row>
                    <div className="text-center copy-right">
                        <p className="mb-0">© {new Date().getFullYear()} Things Analytic Co., Ltd. All rights reserved.</p>
                    </div>
                </Container>
            </footer>
        </div>
    );
}

export default Footer;
