import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2Compo/Section2'
import "../utils/Section.css"


function Section() { 
  return (
    <main id="main">
      <div className="section">
        <div className='section-grid'> 
          <Section1 />
          <Section2 />
        </div>
      </div>
    </main>
  )
}

export default Section
