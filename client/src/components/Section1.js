import React from 'react'

function Section1() {
  return (
    <div class="section-1">
      <div class="fresnel-container">
        <div class="phrase-container">
          <h1 class="phrase">Explore, collect, and sell NFTs</h1>
        </div>
        <div class="swiper-container">
          <div class="swiper">
            <button class="swiper-nav-left"></button>
            <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events home-header-swiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <a class="swiper-nft"></a>
                </div>
                <div class="swiper-slide">
                  <a class="swiper-nft"></a>
                </div>
                <div class="swiper-slide">
                  <a class="swiper-nft"></a>
                </div>
                <div class="swiper-slide">
                  <a class="swiper-nft"></a>
                </div>
                <div class="swiper-slide">
                  <a class="swiper-nft"></a>
                </div>
              </div>
            </div>
            <button class="swiper-nav-right"></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1


