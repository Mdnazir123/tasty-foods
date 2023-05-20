import React from 'react'
import Slider from "react-slick";
import "../../../styles/slider.css";
import avaImg01 from "../../../assets/images/ava-1.jpg";
import avaImg02 from "../../../assets/images/ava-2.jpg";
import avaImg03 from "../../../assets/images/ava-3.jpg";

const TestimonialsSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            <div>
                <p className="review__text">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis atque, quam minus totam maiores laborum! Impedit consectetur illum aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus quis dolorem quas!"</p>
                <div className=" slider__content d-flex align-items-center gap-3 ">
                    <img src={avaImg01} alt="avatar" className=" rounded" />
                    <h6>Jhon Doe</h6>
                </div>
            </div>
            <div>
                <p className="review__text">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis atque, quam minus totam maiores laborum! Impedit consectetur illum aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus quis dolorem quas!"</p>
                <div className=" slider__content d-flex align-items-center gap-3 ">
                    <img src={avaImg02} alt="avatar" className=" rounded" />
                    <h6>Mitchell Marsh</h6>
                </div>
            </div>
            <div>
                <p className="review__text">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis atque, quam minus totam maiores laborum! Impedit consectetur illum aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus quis dolorem quas!"</p>
                <div className=" slider__content d-flex align-items-center gap-3 ">
                    <img src={avaImg03} alt="avatar" className=" rounded" />
                    <h6>Steven Crock</h6>
                </div>
            </div>
        </Slider>
    )
}

export default TestimonialsSlider