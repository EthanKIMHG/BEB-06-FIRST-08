import React, { useContext, useEffect, useState } from 'react'
import "../utils/Section2.css"
import Collections from './Section2Collections'
import InfoList from './Section2InfoList'
import { AppContext } from '../AppContext'

function Section2() {
  const context = useContext(AppContext);
  const collections = context.state.collectionList;
  
  // 일정 시간마다 화면에 호출하는 collections를 조절.

  const changeCollection = [...collections]
  const [collectionLeft, setCollectionLeft] = useState([...changeCollection].slice(0,5));
  const [collectionRight, setCollectionRight] =useState([...changeCollection].slice(5,10));
  

   // promise 써서 한번 해봐도 좋을듯 .
/*   useEffect(() => {
    setTimeout( async () => {
      try {
        await setCollectionLeft([...changeCollection].slice(10,15));
        await setCollectionRight([...changeCollection].slice(15,20));
      } catch(e) {
        return e
      }
    },2000)
  },[collectionLeft]) */

  return (
    <div className="section-2">
      <div className="section2-container">
        <div className='fresnel-container fresnel-greaterThanOrEqual-sm'>
          <div className="section2-stats">
            <div className="section2-nav-container">
              <nav className="section2-nav">
                <div className='section2-nav-space'>
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
                </div>
              </nav>
            </div>
            <div className="collection-left">
              <div className='collection-left-wrapper'>
                <InfoList />
                <div className="collection-left-items">
                   {collectionLeft.map((item, idx) => {
                    return (<Collections
                    className={`collection-item${idx}`}
                    key={idx}
                    number={idx+1}
                    name={item.name}
                    imageUrl={item.image}
                    holder={item.holder}
                    price={item.price}
                    />)
                  })}
                </div>
              </div>
            </div>
            <div className="collection-right">
              <div className='collection-right-wrapper'>
                <InfoList />
                <div className="collection-right-items">
                {collectionRight.map((item, idx) => {
                    return (<Collections
                    className={`collection-item${idx}`}
                    key={idx}
                    number={idx+6}
                    name={item.name}
                    imageUrl={item.image}
                    holder={item.holder}
                    price={item.price}
                    />)
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2


