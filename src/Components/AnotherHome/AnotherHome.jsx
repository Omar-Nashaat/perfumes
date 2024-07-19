import React from 'react'
import ProductSlider from '../ProductSlider/ProductSlider'
import img2 from '../ProductSlider/imgs/slider2.png'
import style from './AnotherHome.module.css'



export default function AnotherHome() {
    return <>
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-4">
                    <ProductSlider />
                    <div className='mt-5 mb-5'>
                        <div className="position-relative">
                            <img src={img2} alt="slider photo offer" className="w-100" />
                            <div className={style.btnEdit + " position-absolute"}>
                                <h2>Up to 80% off.</h2>
                                <button>Search for brand</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
