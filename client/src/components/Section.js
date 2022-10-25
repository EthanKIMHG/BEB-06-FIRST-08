import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import "../utils/Section.css"


//section 1에도 넘겨줘야할 상황이 생길수 있으니
function Section() { // collectionList를 section2에 넘겨줍니다.
  return (
    <main id="main">
      <div className="section">
        <div className='section-grid'> {/*gird를 기준으로 section이 나눔.*/}
          <Section1 />
          <Section2 />
        </div>
      </div>
    </main>
  )
}

export default Section
