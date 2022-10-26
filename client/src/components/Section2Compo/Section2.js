import React from 'react'
import "../../utils/Section2.css"
import Section2CollectionsList from './Section2CollectionsList'
import Section2HoursAndViews from './Section2HoursAndViews'

function Section2() {

  return (
    <div className="section-2">
      <div className="section2-container">
        <div className='fresnel-container fresnel-greaterThanOrEqual-sm'>
          <div className="section2-stats">
            <div className="section2-nav-container">
              <nav className="section2-nav">
                <div className='section2-nav-space'>
                  <ul className="section2-nav-collections "direction="horizontal">
                    <div className='section2-nav-collections-wrapper'>
                      <li className='nav-collection-list'>
                        <a href="/" className='nav-collection-only'>Collections</a>
                      </li>
                    </div>
                  </ul>
                  <Section2HoursAndViews />
                </div>
              </nav>
            </div>
            <Section2CollectionsList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2


