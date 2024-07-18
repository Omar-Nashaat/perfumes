import React from 'react'
import style from './Home.module.css'
import ProductSlider from '../ProductSlider/ProductSlider'
import productImg from './imgs/product.png'
import smellImg from './imgs/smellImgpng.png'

export default function Home() {
  return <>
    <div className={style.home}>
      <section className={style.firstScreen + " pt-5"} id='home'>
        <h2 className='text-center pt-5 mt-5'>Elevate everyday <br /> moments to <br />extraordinary</h2>
        <button className='btn btn-light d-block m-auto rounded-4 p-2 mt-3 px-4'>
          <a href="#products" className='text-decoration-none text-dark'>Shop Our Fragrances</a>
        </button>
      </section>
      <section className={style.products + " pt-4 pb-5"} id='products'>
        <div className="container">
          <h3 className='text-center mt-5 mb-5'>Featured Products</h3>
          <div className="row">
            <div className="col-md-3 mb-4">
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
            <div className="col-md-3 mb-4">
              <div className="productImg mb-2">
                <img src={productImg} alt="productImg" className='w-100' />
              </div>
              <div className='text-center'>
                <h5>Lavanda</h5>
                <h6 className='fw-bold'>Breezy & joyful</h6>
                <div className='d-flex justify-content-around'>
                  <h6 className='text-danger text-decoration-line-through'>$39.95</h6>
                  <h6>$39.95</h6>
                </div>
                <button className='btn btn-success w-100 rounded-4'>Add to Cart</button>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="productImg mb-2">
                <img src={productImg} alt="productImg" className='w-100' />
              </div>
              <div className='text-center'>
                <h5>Lavanda</h5>
                <h6 className='fw-bold'>Breezy & joyful</h6>
                <h6>$39</h6>
                <button className='btn btn-success w-100 rounded-4'>Add to Cart</button>
              </div>
            </div>
            <div className="col-md-3 mb-4">
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
          </div>
        </div>
      </section>
      {/* <div className={style.sectionLine}></div> */}
      <section className={style.products + " pt-5"}>
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-md-6">
              <img src={smellImg} alt="smell img" className='w-100' />
            </div>
            <div className="col-md-4 mt-5 pt-5">
              <div className="text-center mt-5 pt-5">
                <h3 className='mb-4'>Smell Like a dream</h3>
                <span>With every delicate spritz, our scents weave a tapestry of dreams, enveloping you in an irresistible aura that lingers like the sweetest reverie. Each note is meticulously crafted to transport you to a realm where your aspirations come alive, leaving an impression that's as lasting as the memory of a cherished dream.</span>
                <button className='btn btn-success d-block m-auto rounded-4 p-2 mt-3 px-4 mb-3'>
                  <a href="#products" className='text-decoration-none text-white'>Shop Our Fragrances</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
}
