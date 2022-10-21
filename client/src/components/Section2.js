import React from 'react'
import "../utils/Section2.css"

function Section2() {
  return (
    <div className="section-2">
      <div className="stats">
        <div className="navigation">
          <nav overflow="hidden">
            <ul direction="horizontal">
              <div>
                <li>Trending</li>
                <li>Top</li>
              </div>
            </ul>
            <div className="hours-and-view">
              <button>
                <input type="hidden" value="24h" />
                <div className="hours-options">
                  <span className="hours-chosen"></span>
                </div>
                <div className="arrow-down">
                  <i cursor="pointer" value="keyboard_arrow_down" size="24">keyboard_arrow_down</i>
                </div>
              </button>
            </div>
            <div className="view-all">
              <a href="/rankings" className="">
                <button type="button" name="button">
                  <span>View all</span>
                </button>
              </a>
            </div>
          </nav>
        </div>
        <div>
          <div className="collection-left">
            <div className="collection-info">
              <div width="60%" display="flex" className="">
                <span color="text.subtle">COLLECTION</span>
              </div>
              <div width="20%" display="flex" className="">
                <span color="text.subtle">FLOOR PRICE</span>
              </div>
              <div width="20%" display="flex" className="">
                <span color="text.subtle">VOLUME</span>
              </div>
            </div>
            <div className="collection-items">
              <div role="list-item">
                <a className="item"></a>
              </div>
              <div role="list-item">
                <a className="item"></a>
              </div>
              <div role="list-item">
                <a className="item"></a>
              </div>
              <div role="list-item">
                <a className="item"></a>
              </div>
              <div role="list-item">
                <a className="item"></a>
              </div>
            </div>
          </div>
          <div className="collection-right">
            <div className="collection-info">
              <div width="60%" display="flex" className="">
                <span color="text.subtle">COLLECTION</span>
              </div>
              <div width="20%" display="flex" className="">
                <span color="text.subtle">FLOOR PRICE</span>
              </div>
              <div width="20%" display="flex" className="">
                <span color="text.subtle">VOLUME</span>
              </div>
            </div>
            <div className="collection-items">
              <div role="list-item">
                <a className="item"></a>
              </div>
              <div role="list-item">
                <a className="item"></a>
              </div>
              <div role="list-item">
                <a className="item"></a>
              </div>
              <div role="list-item">
                <a className="item"></a>
              </div>
              <div role="list-item">
                <a className="item"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2


