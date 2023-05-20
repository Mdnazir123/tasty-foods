import React, { useState } from 'react';
import { toast } from "react-toastify";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';
import { FaLocationArrow, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

import "../styles/Contact.css";
const Contact = () => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredMsg, setEnteredMsg] = useState('');

    //form valid---
    const submitHandler = (e) => {
        e.preventDefault();
        toast.success("Thanks For All Form Field Successfully");
    }

    return (
        <Helmet title="Contact">
            <CommonSection title="Contact Us" />
            <section className='contactpage'>
                <Container>
                    <Row>
                        <ul className="dt-contact-iconblock-section dt-sc-column three-column">
                            <li className="dt-contact-icon-block">
                                <div className="dt-contact-icon-image">
                                    <i className="ri-phones-line">
                                        <FaPhoneAlt />
                                    </i>
                                </div>
                                <div className="dt-contact-icon-content">
                                    <h4>Phone</h4>
                                    <p>  <b>Toll-Free: </b> 0000 - 123 - 456789 <br /><b>Fax: </b> 0000 - 123 - 456789</p>
                                </div>
                            </li>
                            <li className="dt-contact-icon-block">
                                <div className="dt-contact-icon-image">
                                    <i className="ri-envelope-line">
                                        <FaEnvelope />
                                    </i>
                                </div>
                                <div className="dt-contact-icon-content">
                                    <h4>Email</h4>
                                    <p>
                                        <Link title="mail@example.com" to="mail@example.com">mail@example.com</Link><br />
                                        <Link title="mail@example.com" to="mailto:mail@example.com">mail@example.com</Link><br />
                                        <Link title="support@example.com" to="mailto:support@example.com">support@example.com</Link>
                                    </p>
                                </div>
                            </li>


                            <li className="dt-contact-icon-block">

                                <div className="dt-contact-icon-image">
                                    <i className="ri-location-line"><FaLocationArrow /></i>
                                </div>

                                <div className="dt-contact-icon-content">
                                    <h4>Address</h4>
                                    <p> No: 58 A, East Madison Street,<br /> Baltimore, MD, USA
                                        4508<br /></p>
                                </div>
                            </li>

                        </ul>
                    </Row>
                </Container>
            </section>
            <section className='contactget'>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12">
                            <div className='heading'>
                                <h2 className="main-heading">Get Connected</h2>
                                <p className="heading-description">Want to send us suggestions for new recipes? Tell us which of our burger is your favorite? Or just say hi? Get in touch!</p>
                            </div>
                        </Col>

                        <Col lg="6" md="6" sm="12">
                            <div className='newsletter-form'>
                                <form onSubmit={submitHandler} className='contact-form'>
                                    <div className='hs-form-field'>
                                        <label>Name</label>
                                        <input type="text" className="hs-input" name="name" onChange={e => setEnteredName(e.target.value)} required></input>
                                    </div>
                                    <div className='hs-form-field'>
                                        <label>Email</label>
                                        <input type="email" className="hs-input" name="email" onChange={e => setEnteredEmail(e.target.value)} required></input>
                                    </div>
                                    <div className='hs-form-field'>
                                        <label>Message</label>
                                        <textarea rows="4" className="hs-textarea" name="message" onChange={e => setEnteredMsg(e.target.value)} required></textarea>
                                    </div>
                                    <div className='hs-submit'>
                                        <button type="submit" className="btn">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>
        </Helmet>
    )
}

export default Contact