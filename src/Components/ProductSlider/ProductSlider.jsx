import React from 'react';
import productImg from '../Home/imgs/product.png'
import Slider from "react-slick";


export default function ProductSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };
    return <>
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <div className="productImg mb-2">
                        <img src={productImg} alt="productImg" className='w-100' />
                    </div>
                    <div className='text-center'>
                        <h5>Lavanda</h5>
                        <h6 className='fw-bold'>Breezy & joyful</h6>
                        <h6>$39.95</h6>
                        <button className='btn btn-success w-100 rounded-4'>Add to Cart</button>
                    </div>
                </div>
                <div>
                    <div className="productImg mb-2">
                        <img src={productImg} alt="productImg" className='w-100' />
                    </div>
                    <div className='text-center'>
                        <h5>Lavanda</h5>
                        <h6 className='fw-bold'>Breezy & joyful</h6>
                        <h6>$39.95</h6>
                        <button className='btn btn-success w-100 rounded-4'>Add to Cart</button>
                    </div>
                </div>
            </Slider>
        </div>
    </>
}
