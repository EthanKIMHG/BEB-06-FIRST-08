import React from 'react'
import "../utils/Footer.css"
import { BsTwitter, BsDiscord, BsInstagram, BsReddit, BsYoutube, BsEnvelope } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";


function Footer() {
  return (
    <div className='footer'>
      <div className="footer-container">
        {/* 1st Part */}
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
              {/* Twitter */}
              <a className="" href="https://twitter.com/opensea" rel="nofollow noopener" >
                <button aria-label="Twitter Official" className="Footer--social-button" type="button">
                  <div className="communuity-icons">
                    <BsTwitter className="" fill="#FFFFFF" style={{height: "20px", width:"30px"}}/>
                  </div>
                </button>
              </a>
              {/* Instagram */}
              <a className="" href="https://www.instagram.com/opensea/" rel="nofollow noopener" >
                <button aria-label="Instagram" className="Footer--social-button" type="button">
                  <div className="communuity-icons">
                    <BsInstagram className="" fill="#FFFFFF" style={{height: "20px", width:"30px"}}/>
                  </div>
                </button>
              </a>
              {/* Discord */}
              <a className="" href="https://discord.gg/opensea" >
                <button aria-label="Discord" className="Footer--social-button" type="button">
                  <div className="communuity-icons">
                    <BsDiscord className="" fill="#FFFFFF" style={{height: "20px", width:"30px"}}/>
                  </div>
                </button>
              </a>
              {/* Reddit */}
              <a className="" href="https://reddit.com/r/opensea" >
                <button aria-label="Reddit" className="Footer--social-button" type="button">
                  <div className="communuity-icons">
                    <BsReddit className="" fill="#FFFFFF" style={{height: "20px", width:"30px"}} />
                  </div>
                </button>
              </a>
              {/* YouTube */}
              <a className="sc-1f719d57-0 fKAlPV" href="https://www.youtube.com/c/OpenSeaTV" >
                <button aria-label="YouTube" className="Footer--social-button" type="button">
                  <div className="communuity-icons">
                    <BsYoutube className="" fill="#FFFFFF" style={{height: "20px", width:"30px"}} />
                  </div>
                </button>
              </a>
              {/* TikTok */}
              <a className="" href="https://www.tiktok.com/@opensea?lang=en" rel="nofollow noopener" target="_blank">
                <button aria-label="TikTok" className="Footer--social-button" type="button">
                  <div className="communuity-icons">
                    <FaTiktok className="" fill="#FFFFFF" style={{height: "20px", width:"30px"}} />
                  </div>
                </button>
              </a>
              {/* Newsletter */}
              <a className="" href="https://opensea.io/blog/newsletter/" rel="nofollow noopener" target="_blank">
                <button aria-label="Mail" className="Footer--social-button" type="button">
                  <div className="communuity-icons">
                    <BsEnvelope fill="#FFFFFF" style={{width: "30px", height:"20px"}}value="mail" className="material-icons-outlined"/>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* 2nd Part */}
        <div className="footer-row">
          <div className="footer-column footer-one-quarter">
            {/* Logo (boat) */}
            <span className='footer-span1' >
              <span className='footer-span2' >
                <img className='footer-image'
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2744%27%20height=%2744%27/%3e">
                </img>
              </span>
              <img className='footer-logo' alt="Logo" src="https://opensea.io/static/images/logos/opensea-white.svg" decoding="async" data-nimg="intrinsic" />
              <img className='footer-logo2' alt="Logo" src="https://opensea.io/static/images/logos/opensea-white.svg" decoding="async" data-nimg="intrinsic" />
              </span>
            {/* Name (OpenSea) */}
            <a className="Footer--section-header" href="https://opensea.io" target="_blank">OpenSea</a>
            {/* Description */}
            <div className="Footer--text">The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</div>
          </div>
          <div className="Footer--three-quarters">
            <div className="Footer--link-column">
              <h3 className="Footer--link-header">Marketplace</h3>
              <ul className="Footer--link-list">
                <li className="Footer--link-wrapper"><a className="Footer--link" >All NFTs</a></li>
                <li className="Footer--link-wrapper"><a className="Footer--link" >Solana NFTs</a></li>
                <li className="Footer--link-wrapper"><a className="Footer--link" >Art</a></li>
                <li className="Footer--link-wrapper"><a className="Footer--link" >Collectibles</a></li>
                <li className="Footer--link-wrapper"><a className="Footer--link" >Domain Names</a></li>
                <li className="Footer--link-wrapper"><a className="Footer--link" >Music</a></li>
                <li className="Footer--link-wrapper"><a className="Footer--link" >Photography</a></li>
                <li className="Footer--link-wrapper"><a className="Footer--link" >Sports</a></li>
                <li className="Footer--link-wrapper"><a className="Footer--link" >Trading Cards</a></li>
                <li className="Footer--link-wrapper"><a className="Footer--link" >Utility</a></li>
                <li className="Footer--link-wrapper"><a className="Footer--link" >Virtual Worlds</a></li>
              </ul>
            </div>
            <div className="Footer--link-column">
              <h3 className="Footer--link-header">My Account</h3>
              <ul className="Footer--link-list">
                <li className="Footer--link-wrapper"><a className="Footer--link" >Profile</a></li>
                <li className="Footer--link-wrapper"><a className="Footer--link" >Favorites</a></li>
                <li className="Footer--link-wrapper"><a className="Footer--link" >Watchlist</a></li>
                <li className="Footer--link-wrapper"><a className="Footer--link" >My Collections</a></li>
                <li className="Footer--link-wrapper"><a className="Footer--link" >Settings</a></li>
              </ul>
              <h3 className="Footer--link-header">Stats</h3>
              <ul className="Footer--link-list">
                <li className="Footer--link-wrapper"><a className="Footer--link" >Rankings</a></li>
                <li className="Footer--link-wrapper"><a className="Footer--link" >Activity</a></li>
              </ul>
            </div>
            <div className="Footer--link-column">
              <h3 className="Footer--link-header">Resources</h3>
              <ul className="Footer--link-list">
                <li className="Footer--link-wrapper"><a className="Footer--link"  target="_blank">Learn</a></li>
                <li className="Footer--link-wrapper"><a className="Footer--link"  target="_blank">Help Center</a></li>
                <li className="Footer--link-wrapper"><a className="Footer--link"  target="_blank">Platform Status</a></li>
                <li className="Footer--link-wrapper"><a className="Footer--link" >Partners</a></li>
                <li className="Footer--link-wrapper"><a className="Footer--link" >Taxes</a></li>
                <li className="Footer--link-wrapper"><a className="Footer--link"  target="_blank">Blog</a></li>
                <li className="Footer--link-wrapper"><a className="Footer--link"  target="_blank">Docs</a></li>
                <li className="Footer--link-wrapper"><a className="Footer--link" target="_blank">Newsletter</a></li>
              </ul>
            </div>
            <div className="Footer--link-column">
              <h3 className="Footer--link-header">Company</h3>
              <ul className="Footer--link-list">
                <li className="Footer--link-wrapper"><a className="Footer--link" >About</a></li>
                <li className="Footer--link-wrapper"><a className="Footer--link" >Careers</a></li>
                <li className="Footer--link-wrapper"><a className="Footer--link" >Ventures</a></li>
                <li className="Footer--link-wrapper"><a className="Footer--link" >Grants</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom Part */}
        <div className="footer-bottom">
          <div className="Footer--bottom-section">
            <p>© 2018 - 2022 Ozone Networks, Inc</p>
          </div>
          <div className="Footer--bottom-section">
            <a className="Footer--link" >Privacy Policy</a>
            <a className="Footer--link" >Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer