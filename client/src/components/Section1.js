import React from 'react';
import "../utils/Section1.css";

function Section1() {
  return (
    <div className="section-1">
      <div className="section1-container"> {/*grid가 이미 적용.*/}
        <div className="section1-wrapper">
          <div className='section1-text'>
            <h1 className="text">Explore, collect, and sell NFTs</h1>
          </div>
        </div>
        <div className="swiper-grid">
          <div className='swipper-container'>
            <div className='carousel-wrapper'>
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
  )
}

export default Section1


