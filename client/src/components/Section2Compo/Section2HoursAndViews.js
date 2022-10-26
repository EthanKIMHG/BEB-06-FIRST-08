import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";

function Section2HoursAndViews() {
  return (
    <div className="hours-and-view">
      <div className="nav-hours">
        <button className='hours'>
          <input type="hidden" value="24h" />
          <div className="hours-options">
            <span className="hours-chosen">24h</span>
          </div>
          <div className="arrow-down">
            <MdKeyboardArrowDown cursor="pointer"size="24" />
          </div>
        </button>
      </div>
      <div className="fresnel-container fresnel-greaterThanOrEqual-lg nav-view">
        <a href="/" className="view-all">
          <button type="button" className='view-button'>
          <span>View all</span>
          </button>
        </a>
      </div>
    </div>
  )
}

export default Section2HoursAndViews