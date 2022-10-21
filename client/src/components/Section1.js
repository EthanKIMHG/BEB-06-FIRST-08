import React from 'react';
import "../utils/Section1.css";

function Section1() {
  return (
    <div className="section-1">
      <div className='fresnel-container fresnel-greaterThanOrEqual-xxl'>
        <div className="section1-container"> {/*grid가 이미 적용.*/}
          <div className='section1-container2'>
            <div className="fresnel-container fresnel-greaterThanOrEqual-xxl">
              <div className="section1-wrapper">
                <div className='section1-text'>
                  <h1 className="text">Explore, collect, and sell NFTs</h1>
                </div>
              </div>
            </div>
            <div className='fresnel-container fresnel-between-sm-xxl'></div>
            <div className='fresnel-container fresnel-lessThan-sm-sm'></div>
            <div className="background-grid">
              <div className='background-container'>
                <div className='background-wrapper'>
                  <img src='https://media.istockphoto.com/photos/sonoran-sunset-picture-id1296913338?k=20&m=1296913338&s=612x612&w=0&h=6U0r8rlHTVnOrY3WbJabcm-PWR6ekJif8WMU78giotE=' style={{ width: "50%" }} />
                </div>
              </div>
              <button className="swiper-nav-left"></button>
              <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events home-header-swiper">
                {/*<div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <a className="swiper-nft"></a>
                  </div>
                  <div className="swiper-slide">
                    <a className="swiper-nft"></a>
                  </div>
                  <div className="swiper-slide">
                    <a className="swiper-nft"></a>
                  </div>
                  <div className="swiper-slide">
                    <a className="swiper-nft"></a>
                  </div>
                  <div className="swiper-slide">
                    <a className="swiper-nft"></a>
                  </div>
                </div> */}
              </div>
              <button className="swiper-nav-right"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1


