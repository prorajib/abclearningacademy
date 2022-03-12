import React from 'react';
import './Footer.css';
import { Col, Container, Row } from 'react-bootstrap';
import {FaFacebook,FaTwitter,FaYoutube,FaInstagram} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img from '../../images/logo-white.png';

const Footer = () => {
    return (
            <footer className='footer'>
                <div className='footer-top txt-white'>
                    <div className="line"></div>
                    <h1>Subscribe to newsletter</h1>
                    <div className="newsletter">
                        <input className="newsletter_email" type="email" placeholder="Enter your Email address." name="" id="" />
                        <button id="newsletter_submit" type="submit" value="submit">Subscribe</button>
                    </div>
                </div>
              <Container>
            
                  <Row className="footer-bottom">
                     <Col  xs={6} md={4}>
                         <div className='logo-img'><img src={img} alt="" srcset="" /></div>
                         <div> AbC Learning Academy is one of the best website for E-learning. It has almost 3000 professional courses and 1.5 million students all over the world.</div>
                     </Col>
                     <Col  xs={6} md={4}>
                         <h2 className='txt-center'>Menu</h2>
                         <ul className="footer-menu">
                             <li><Link className="footer-menu-link" to="/home">Home</Link></li>
                             <li><Link className="footer-menu-link" to="/courses">Courses</Link></li>
                             <li><Link className="footer-menu-link" to="/about">About</Link></li>
                             <li><Link className="footer-menu-link" to="/contact">Contact</Link></li>
                             <li></li>
                         </ul>

                     </Col>
                     <Col  xs={6} md={4}>
                         <div>
                             <h2>Contact</h2>
                             <ul className="contact-address">
                                 <li>Siddirganj,Narayanganj,Bangladesh</li>
                                 <li>Phone: +880123456789</li>
                                 <li>abclearningacademy@gmail.com</li>

                             </ul>
                         </div>
                     </Col>
                 </Row>
              </Container>


              <Row className='copywrite-area txt-white'>
                  <Col>
                     <span className="copy-txt">Copyright © All Rights Reserved By Rajib Chandra Das.</span>
                  </Col>
                <Col xs={3}></Col>
                  <Col>
                  <ul className="social_menu">

                       <li class="menu_social_item"><Link to="#"><FaFacebook className="social-icon"/></Link></li>
                       <li class="menu_social_item"><Link to="#"><FaTwitter  className="social-icon"/></Link></li>
                       <li class="menu_social_item"><Link to="#"><FaYoutube  className="social-icon"/></Link></li>
                       <li class="menu_social_item"><Link to="#"><FaInstagram  className="social-icon"/></Link></li>
                 </ul>
                  </Col>
              </Row>
            </footer>       
            
    );
};

export default Footer;