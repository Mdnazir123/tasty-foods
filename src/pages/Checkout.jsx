import "../styles/checkout.css";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { useState } from "react";

const Checkout = () => {

  const [enterName, setEnterNmae] = useState('');
  const [enterEmail, setEnterEmail] = useState('');
  const [enterMobileNumber, setEnterMobileNumber] = useState('');
  const [enterCity, setEnterCity] = useState('');
  const [enterPostCode, setEnterPostCode] = useState('');
  const [enterCountry, setEnterCountry] = useState('');
  const [shippingInfo, setShippingInfo] = useState([]);

  const cartTotalAmount = useSelector(state => state.cart.totalAmount)
  const shippingCost = 30
  const totalAmount = cartTotalAmount + Number(shippingCost);

  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterMobileNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: enterPostCode,
    };
    shippingInfo.push(userShippingAddress)
    console.log(shippingInfo);

  }

  return (
    <>
      <Helmet title="Checkout">
        <CommonSection title="Checkout" />
        <section>
          <Container>
            <Row>
              <Col lg="8" md="6">
                <h6 className="mb-4">Shipping Address</h6>
                <form action="/thankyou" className="checkout__form" onSubmit={submitHandler}>
                  <div className="form__group">
                    <input type="text" placeholder="Enter your name" onChange={(e) => setEnterNmae(e.target.value)} required />
                  </div>
                  <div className="form__group">
                    <input type="email" placeholder="Enter your email" onChange={(e) => setEnterEmail(e.target.value)} required />
                  </div>
                  <div className="form__group">
                    <input type="number" placeholder="Phone number" onChange={(e) => setEnterMobileNumber(e.target.value)} />
                  </div>
                  <div className="form__group">
                    <input type="text" placeholder="Country" required onChange={(e) => setEnterCountry(e.target.value)} />
                  </div>
                  <div className="form__group">
                    <input type="text" placeholder="City" onChange={(e) => setEnterCity(e.target.value)} required />
                  </div>
                  <div className="form__group">
                    <input type="number" placeholder="Postal code" onChange={(e) => setEnterPostCode(e.target.value)} required />
                  </div>
                  <button type="submit" className="addTOCart__btn" >Payment</button>
                </form>

              </Col>

              <Col lg="4" md="6">
                <div className="checkout__bill">
                  <h6 className="d-flex align-items-center justify-content-between mb-3">Subtotal: <span>${cartTotalAmount}</span></h6>
                  <h6 className="d-flex align-items-center justify-content-between mb-3">Shipping: <span>${shippingCost}</span></h6>
                  <div className="checkout__total">
                    <h5 className="d-flex align-items-center justify-content-between">Total: <span>${totalAmount}</span></h5>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default Checkout;
