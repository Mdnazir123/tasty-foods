import React from 'react';
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { AiFillCheckCircle } from "react-icons/ai";
import '../styles/checkout.css';

const ThankYou = () => {
    return (
        <Helmet title="ThankYou">
            <CommonSection title="Thank You Page" />
            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <div className="checkoutMessage">
                                <div className="checkoutTitleContainer">
                                    <AiFillCheckCircle className="checkoutIcon" />
                                    <h3>Thank you for your order!</h3>
                                </div>
                                <span>
                                    Your order is being processed and will be delivered as fast as
                                    possible.
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </Helmet>
    )
}

export default ThankYou