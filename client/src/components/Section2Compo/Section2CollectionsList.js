import React, {useContext} from 'react'
import Collections from './Section2Collections'
import InfoList from './Section2InfoList'
import { AppContext } from '../../AppContext'

function Section2CollectionsList() {

  const context = useContext(AppContext);
  const collections = context.state.collectionList;
  const changeCollection = [...collections]
  changeCollection.sort(()=> Math.random() - 0.5);
  const collectionLeft =[...changeCollection].slice(0,5);
  const collectionRight=[...changeCollection].slice(5,10);

  const CollectionLeft = () => {
    return (
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
    )
  }

const CollectionRight = () => {
    return (
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
    )
  }

  return (
    <>
      <CollectionLeft />
      <CollectionRight />
    </>
  )
}

export default Section2CollectionsList





