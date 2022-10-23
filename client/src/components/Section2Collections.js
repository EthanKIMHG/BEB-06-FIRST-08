import React from 'react'

function Collections({number, title, value, holder}) {
  return (
      <a className="item">
        <div className='item-container'>
          <div className='fresnel-container fresnel-lessThan-sm'></div>
          <div className='fresnel-container fresnel-greaterThanOrEqual-sm'>
              <div className="item-number">
                <span className='item-number-only'>{number}</span>
              </div>
            </div>
          <div className='fresnel-container fresnel-lessThan-sm'></div>
          <div className='fresnel-container fresnel-between-sm-lg'></div>
          <div className='fresnel-container fresnel-greaterThanOrEqual-lg'>
            <div className='item-image-container'>
              <div className='item-image-wrapper'>
                <span className='item-image'>
                  <img className='item-image-only' src="https://i.seadn.io/gcs/files/1812d854711c186f5fd04f1404412065.png?auto=format&w=256" />
                </span>
              </div>
              <div className="item-title-container">
                <div className="item-titie-wrapper">
                  <div className='fresnel-container fresnel-greaterThanOrEqual-sm'>
                    <span className='item-title'>
                      <div className='item-title-only'>
                        titletitletitle
                      </div>
                    </span>
                  </div>
                  <div className='fresnel-container fresnel-lessThan-md'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='holder-container'>
          <span className='holder-wrapper'>
            <div className='holder'>
              holderhodler
            </div>
          </span>
        </div>
        <div className='value-container'>
          <div className='value-wrapper'>
            <div className='value-wrapper-2'>
              <div className='fresnel-container fresnel-greaterThanOrEqual-md'>
                <span className='value-only'>
                  <div className='value-eth'>
                    110ETH
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
  )
}

export default Collections