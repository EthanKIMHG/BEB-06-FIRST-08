import React from 'react';
import "../utils/Section1.css";

function Section1() {
  return (
    <div className="section-1">
      <div className='fresnel-container fresnel-greaterThanOrEqual-sm'>
        <div className="section1-container"> {/*grid가 이미 적용.*/}
          <div className='section1-container2'>
            <div className="fresnel-container fresnel-greaterThanOrEqual-sm">
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
                  <div className='background-row'>
                    <img src="https://images.pexels.com/photos/1703317/pexels-photo-1703317.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
                    <img src="https://w0.peakpx.com/wallpaper/652/786/HD-wallpaper-arid-desert-landscape-at-twilight-sky-clouds-cactus-twilight-deserts-sunsets-nature.jpg" />
                    <img src="https://images.pexels.com/photos/34107/milky-way-stars-night-sky.jpg?auto=compress&cs=tinysrgb&w=1600" />
                  </div>
                </div>
              </div>
              <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events home-header-swiper">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1


