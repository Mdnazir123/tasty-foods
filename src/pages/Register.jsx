import React, { useRef } from 'react'
import { Container, Row, Col } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from "../components/UI/common-section/CommonSection";
import { Link } from 'react-router-dom';
import '../styles/login.css';
const Register = () => {
    const signupNameRef = useRef();
    const signupPasswordRef = useRef();
    const signupEmailRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <Helmet title="Register">
            <CommonSection title="Register" />
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12" className='loginform m-auto text-center'>
                            <form className="form mb-5" onSubmit={submitHandler}>
                                <div className="form__group">
                                    <input type="text" placeholder="Full Name" required ref={signupNameRef} />
                                </div>
                                <div className="form__group">
                                    <input type="email" placeholder="Email" required ref={signupEmailRef} />
                                </div>
                                <div className="form__group">
                                    <input type="password" placeholder="Password" required ref={signupPasswordRef} />
                                </div>
                                <button type="submit" className="addTOCart__btn">Login</button>
                            </form>
                            <Link to="/login">Already have an account? Login</Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Register