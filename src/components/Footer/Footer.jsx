import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from "react-router-dom";
import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
            <div className="logo footer__logo text-start">
              <img src={logo} alt="Logo" />
              <h5>Tasty Foods</h5>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>

          </Col>

          <Col lg='3' md='4' sm='6'>
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg='3' md='4' sm='6'>
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <p>Location: ZindaBazar, Sylhet-3100, Bangladesh</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Phone: 01712345678</span>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Email: example@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg='3' md='4' sm='6'>
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <form action="" method="post">
                <input type="email" placeholder="Enter your email" required />
                <button className="hs-btns" type="submit">
                  <span><i className="ri-send-plane-line"></i></span>
                </button>
              </form>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">Copyright - 2023, website made by Md Nazir. All Rights Reserved.</p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span> <Link to="#"><i className="ri-facebook-line"></i></Link> </span>
              <span><Link to="#"><i className="ri-github-line"></i></Link></span>
              <span> <Link to="#"><i className="ri-youtube-line"></i></Link> </span>
              <span> <Link to="#"><i className="ri-linkedin-line"></i></Link> </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
