import React, { useContext } from 'react'
import "../utils/Section2.css"
import Collections from './Section2Collections'
import InfoList from './Section2InfoList'
import { AppContext } from '../AppContext'

function Section2() {
  const context = useContext(AppContext);
  const collections = context.collectionList;
  const collectionLeft = [...collections].slice(0,5);
  const collectionRight = [...collections].slice(5,10);
  

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
{/*                   <Collections className="collection-item1" number="1" url="" title="" value="" holder=""/>  
                  <Collections className="collection-item2" number="2" url="" title="" value="" holder=""/>  
                  <Collections className="collection-item3" number="3" url="" title="" value="" holder=""/>  
                  <Collections className="collection-item4" number="4" url="" title="" value="" holder=""/>  
                  <Collections className="collection-item5" number="5" url="" title="" value="" holder=""/> */}  
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


