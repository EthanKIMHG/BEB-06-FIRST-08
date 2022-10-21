import React from 'react'
import "../utils/Section3.css"

function Section3() {
  return (
    <div className="section-3">
      <div className="new-notable">
        <div className="container">
          <div className="empty-space"></div>
          <div className="fresnel-container fresnel-between-lg-xxl">
            <span className="">New and notable</span>
          </div>
          <div className="swiper-container">
            <div className="swiper">
              <button className="swiper-nav-left"></button>
              <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events home-header-swiper">
                <div className="swiper-wrapper">
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
                </div>
              </div>
              <button className="swiper-nav-right"></button>
            </div>
          </div>
        </div>
      </div>
      <div className="dreamers-spotlight">
        <div className="container">
          <div className="empty-space"></div>
          <div className="fresnel-container fresnel-between-lg-xxl">
            <span className="">Dreamers spotlight</span>
          </div>
          <div className="swiper-container">
            <div className="swiper">
              <button className="swiper-nav-left"></button>
              <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events home-header-swiper">
                <div className="swiper-wrapper">
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
                </div>
              </div>
              <button className="swiper-nav-right"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3


