import React from 'react'

function Section2() {
  return (
    <div class="section-2">
      <div class="stats">
        <div class="navigation">
          <nav overflow="hidden">
            <ul direction="horizontal">
              <div>
                <li>Trending</li>
                <li>Top</li>
              </div>
            </ul>
            <div class="hours-and-view">
              <button>
                <input type="hidden" value="24h" />
                <div class="hours-options">
                  <span class="hours-chosen"></span>
                </div>
                <div class="arrow-down">
                  <i cursor="pointer" value="keyboard_arrow_down" size="24">keyboard_arrow_down</i>
                </div>
              </button>
            </div>
            <div class="view-all">
              <a href="/rankings" class="">
                <button type="button" name="button">
                  <span>View all</span>
                </button>
              </a>
            </div>
          </nav>
        </div>
        <div>
          <div class="collection-left">
            <div class="collection-info">
              <div width="60%" display="flex" class="">
                <span color="text.subtle">COLLECTION</span>
              </div>
              <div width="20%" display="flex" class="">
                <span color="text.subtle">FLOOR PRICE</span>
              </div>
              <div width="20%" display="flex" class="">
                <span color="text.subtle">VOLUME</span>
              </div>
            </div>
            <div class="collection-items">
              <div role="list-item">
                <a class="item"></a>
              </div>
              <div role="list-item">
                <a class="item"></a>
              </div>
              <div role="list-item">
                <a class="item"></a>
              </div>
              <div role="list-item">
                <a class="item"></a>
              </div>
              <div role="list-item">
                <a class="item"></a>
              </div>
            </div>
          </div>
          <div class="collection-right">
            <div class="collection-info">
              <div width="60%" display="flex" class="">
                <span color="text.subtle">COLLECTION</span>
              </div>
              <div width="20%" display="flex" class="">
                <span color="text.subtle">FLOOR PRICE</span>
              </div>
              <div width="20%" display="flex" class="">
                <span color="text.subtle">VOLUME</span>
              </div>
            </div>
            <div class="collection-items">
              <div role="list-item">
                <a class="item"></a>
              </div>
              <div role="list-item">
                <a class="item"></a>
              </div>
              <div role="list-item">
                <a class="item"></a>
              </div>
              <div role="list-item">
                <a class="item"></a>
              </div>
              <div role="list-item">
                <a class="item"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2


