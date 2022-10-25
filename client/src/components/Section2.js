import React, { useContext} from 'react'
import "../utils/Section2.css"
import Collections from './Section2Collections'
import InfoList from './Section2InfoList'
import { AppContext } from '../AppContext'
import { MdKeyboardArrowDown } from "react-icons/md";

function Section2() {
  const context = useContext(AppContext);
  const collections = context.state.collectionList;
  
  // 일정 시간마다 화면에 호출하는 collections를 조절.
  const changeCollection = [...collections]
  changeCollection.sort(()=> Math.random() - 0.5); // 무작위 섞기
  const collectionLeft =[...changeCollection].slice(0,5);
  const collectionRight=[...changeCollection].slice(5,10);

  

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
                  <ul className="section2-nav-collections "direction="horizontal">
                    <div className='section2-nav-collections-wrapper'>
                      <li className='nav-collection-list'>
                        <a href="#!" className='nav-collection-only'>Collections</a>
                      </li>
                    </div>
                  </ul>
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
                      <a href="#!" className="view-all">
                        <button type="button" className='view-button'>
                        <span>View all</span>
                        </button>
                      </a>
                    </div>
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


