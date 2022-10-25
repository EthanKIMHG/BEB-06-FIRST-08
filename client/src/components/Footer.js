import React from 'react'
import "../utils/Footer.css"
import {TwitterIcon, DiscordIcon,InstagraIcon ,RedditIcon, YoutubeIcon, EnvelopeIcon, TiktokIcon, MarketPlaceList, MyAccountList, ResourcesList, CompanyList} from "./FooterTools"

function Footer() {

  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-column footer-half">
            <div className="footer-header">Stay in the loop</div>
            <div className="footer-text">Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.</div>
            <form className='footer-form'>
              <div className="mailing-signup-container">
                <div className="mailing-signup-area">
                  <div className="mailing-signup-input">
                    <input className='signup-input' defaultValue={""}></input>
                  </div>
                </div>
                <button className="mailing-signup-button" height="50px" width="162px" type="button">Sign up</button>
              </div>
            </form>
          </div>
          <div className="footer-column footer-half" style={{paddingLeft: "80px"}}>
            <div className="footer-header">Join the community</div>
            <div className="social-buttons">
              <TwitterIcon />
              <InstagraIcon />
              <DiscordIcon />
              <RedditIcon />
              <YoutubeIcon />
              <TiktokIcon /> 
              <EnvelopeIcon />
            </div>
          </div>
        </div>
        <div className="footer-row">
          <div className="footer-column footer-one-quarter">
            {/* Logo (boat) */}
            <span className='footer-span1' >
              <span className='footer-span2' >
                <img className='footer-image' alt=""
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2744%27%20height=%2744%27/%3e">
                </img>
              </span>
              <img className='footer-logo' alt="Logo" src="https://opensea.io/static/images/logos/opensea-white.svg" decoding="async" data-nimg="intrinsic" />
              <img className='footer-logo2' alt="Logo" src="https://opensea.io/static/images/logos/opensea-white.svg" decoding="async" data-nimg="intrinsic" />
              </span>
            {/* Name (OpenSea) */}
            <a className="Footer--section-header" href="https://opensea.io">OpenSea</a>
            {/* Description */}
            <div className="Footer--text">The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</div>
          </div>
          <div className="Footer--three-quarters">
            <MarketPlaceList/>
            <MyAccountList/>
            <ResourcesList/>
            <CompanyList />
          </div>
        </div>
        {/* Bottom Part */}
        <div className="footer-bottom">
          <div className="Footer--bottom-section">
            <p>© 2018 - 2022 Ozone Networks, Inc</p>
          </div>
          <div className="Footer--bottom-section">
            <span className="Footer--link" >Privacy Policy</span>
            <span className="Footer--link" >Terms of Service</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer