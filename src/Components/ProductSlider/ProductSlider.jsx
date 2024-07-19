import React from "react";
import Slider from "react-slick";
import img1 from './imgs/slider1.png'
import img2 from './imgs/slider2.png'
import style from './ProductSlider.module.css'

function ProductSlider() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <div className="position-relative">
                        <img src={img1} alt="slider photo offer" className="w-100" />
                        <div className={style.btnEdit + " position-absolute"}>
                            <h6>Find the perfect in our</h6>
                            <h2>Variety <br /> gift sales</h2>
                            <button className="">Shop Now</button>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default ProductSlider;
