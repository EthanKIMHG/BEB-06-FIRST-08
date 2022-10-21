import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import "../utils/Section.css"

function Section() {
  return (
    <main id="main">
      <div class="section">
        <div className='section-grid'> {/*gird를 기준으로 section이 나눔.*/}
          {/*           <Section1 />
          <Section2 />
          <Section3 />
          <Section4 /> */}
          <Section1 />
        </div>
      </div>
    </main>
  )
}

export default Section
