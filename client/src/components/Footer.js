import React from 'react'
import "../utils/Footer.css"

function Footer() {
  return (
    <div className="footer-container">
      {/* 1st Part */}
      <div className="footer-row">
        <div className="footer-column footer-half">
          <div className="footer-header">Stay in the loop</div>
          <div className="footer-text">Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.</div>
          <form>
            <div className="mailing-signup-container">
              <div className="mailing-signup-area">
                <div className="mailing-signup-input">
                  <input aria-invalid="false" style="cursor:text" placeholder="Your email address" name="email" value="">
                  </input></div>
              </div>
              <button class="MailingSignupForm--button" height="50px" width="162px" type="button">Sign up</button>
            </div>
          </form>
        </div>
        <div className="footer-column footer-half">
          <div className="footer-header">Join the community</div>
          <div className="social-buttons">
            {/* Twitter */}
            <a className="" href="https://twitter.com/opensea" rel="nofollow noopener" target="_blank">
              <button aria-label="Twitter Official" class="Footer--social-button" type="button">
                <div className="">
                  <svg className="" fill="#FFFFFF" style="height:20px;width:30px" viewBox="0 0 18 16"></svg>
                </div>
              </button>
            </a>
            {/* Instagram */}
            <a className="" href="https://www.instagram.com/opensea/" rel="nofollow noopener" target="_blank">
              <button aria-label="Instagram" class="Footer--social-button" type="button">
                <div className="">
                  <svg className="" fill="#FFFFFF" style="height:20px;width:30px" viewBox="0 0 24 24"></svg>
                </div>
              </button>
            </a>
            {/* Discord */}
            <a className="" href="https://discord.gg/opensea" rel="nofollow noopener" target="_blank">
              <button aria-label="Discord" class="Footer--social-button" type="button">
                <div className="">
                  <svg className="" fill="#FFFFFF" style="height:20px;width:30px" viewBox="0 0 22 16"></svg>
                </div>
              </button>
            </a>
            {/* Reddit */}
            <a className="" href="https://reddit.com/r/opensea" rel="nofollow noopener" target="_blank">
              <button aria-label="Reddit" class="Footer--social-button" type="button">
                <div class="sc-29427738-0 sc-630fc9ab-0 sc-53d45fdb-0 dVNeWL jSPhMX gIzYhv">
                  <svg className="" fill="#FFFFFF" style="height:20px;width:30px" viewBox="0 0 24 24"></svg>
                </div>
              </button>
            </a>
            {/* YouTube */}
            <a class="sc-1f719d57-0 fKAlPV" href="https://www.youtube.com/c/OpenSeaTV" rel="nofollow noopener" target="_blank">
              <button aria-label="YouTube" class="sc-29427738-0 sc-ebeca040-0 nFISH kWIWry Footer--social-button" type="button">
                <div class="sc-29427738-0 sc-630fc9ab-0 sc-53d45fdb-0 dVNeWL jSPhMX gIzYhv">
                  <svg className="" fill="#FFFFFF" style="height:20px;width:30px" viewBox="0 0 20 18"></svg>
                </div>
              </button>
            </a>
            {/* TikTok */}
            <a className="" href="https://www.tiktok.com/@opensea?lang=en" rel="nofollow noopener" target="_blank">
              <button aria-label="TikTok" class="sc-29427738-0 sc-ebeca040-0 nFISH kWIWry Footer--social-button" type="button">
                <div class="sc-29427738-0 sc-630fc9ab-0 sc-53d45fdb-0 dVNeWL jSPhMX gIzYhv">
                  <svg className="" fill="#FFFFFF" style="height:20px;width:30px" viewBox="0 0 2859 3333"></svg>
                </div>
              </button>
            </a>
            {/* Newsletter */}
            <a className="" href="https://opensea.io/blog/newsletter/" rel="nofollow noopener" target="_blank">
              <button aria-label="Mail" class="Footer--social-button" type="button">
                <div className="">
                  <i color="white" size="30" value="mail" class="material-icons-outlined">mail</i>
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
          <span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%">
            <span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%">
              <img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2744%27%20height=%2744%27/%3e">
              </img></span>
            <img alt="Logo" src="https://opensea.io/static/images/logos/opensea-white.svg" decoding="async" data-nimg="intrinsic"
              style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%">
              <noscript>
                <img alt="Logo" src="https://opensea.io/static/images/logos/opensea-white.svg" decoding="async" data-nimg="intrinsic"
                  style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy" />
              </noscript>
            </img></span>
          {/* Name (OpenSea) */}
          <a class="Footer--section-header" href="https://opensea.io" rel="nofollow noopener" target="_blank">OpenSea</a>
          {/* Description */}
          <div class="Footer--text">The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</div>
        </div>
        <div class="Footer--three-quarters">
          <div class="Footer--link-column">
            <h3 class="Footer--link-header">Marketplace</h3>
            <ul class="Footer--link-list">
              <li class="Footer--link-wrapper"><a class="Footer--link" href="/assets">All NFTs</a></li>
              <li class="Footer--link-wrapper"><a class="Footer--link" href="/solana-collections">Solana NFTs</a></li>
              <li class="Footer--link-wrapper"><a class="Footer--link" href="/category/art">Art</a></li>
              <li class="Footer--link-wrapper"><a class="Footer--link" href="/category/collectibles">Collectibles</a></li>
              <li class="Footer--link-wrapper"><a class="Footer--link" href="/category/domain-names">Domain Names</a></li>
              <li class="Footer--link-wrapper"><a class="Footer--link" href="/category/music">Music</a></li>
              <li class="Footer--link-wrapper"><a class="Footer--link" href="/category/photography-category">Photography</a></li>
              <li class="Footer--link-wrapper"><a class="Footer--link" href="/category/sports">Sports</a></li>
              <li class="Footer--link-wrapper"><a class="Footer--link" href="/category/trading-cards">Trading Cards</a></li>
              <li class="Footer--link-wrapper"><a class="Footer--link" href="/category/utility">Utility</a></li>
              <li class="Footer--link-wrapper"><a class="Footer--link" href="/category/virtual-worlds">Virtual Worlds</a></li>
            </ul>
          </div>
          <div class="Footer--link-column">
            <h3 class="Footer--link-header">My Account</h3>
            <ul class="Footer--link-list">
              <li class="Footer--link-wrapper"><a class="Footer--link" href="/account">Profile</a></li>
              <li class="Footer--link-wrapper"><a class="Footer--link" href="/account?tab=favorites">Favorites</a></li>
              <li class="Footer--link-wrapper"><a class="Footer--link" href="/rankings/watchlist">Watchlist</a></li>
              <li class="Footer--link-wrapper"><a class="Footer--link" href="/collections">My Collections</a></li>
              <li class="Footer--link-wrapper"><a class="Footer--link" href="/account/settings">Settings</a></li>
            </ul>
            <h3 class="Footer--link-header">Stats</h3>
            <ul class="Footer--link-list">
              <li class="Footer--link-wrapper"><a class="Footer--link" href="/rankings">Rankings</a></li>
              <li class="Footer--link-wrapper"><a class="Footer--link" href="/activity">Activity</a></li>
            </ul>
          </div>
          <div class="Footer--link-column">
            <h3 class="Footer--link-header">Resources</h3>
            <ul class="Footer--link-list">
              <li class="Footer--link-wrapper"><a class="Footer--link" href="https://opensea.io/learn" rel="nofollow noopener" target="_blank">Learn</a></li>
              <li class="Footer--link-wrapper"><a class="Footer--link" href="https://support.opensea.io/" rel="nofollow noopener" target="_blank">Help Center</a></li>
              <li class="Footer--link-wrapper"><a class="Footer--link" href="https://status.opensea.io" rel="nofollow noopener" target="_blank">Platform Status</a></li>
              <li class="Footer--link-wrapper"><a class="Footer--link" href="/partners">Partners</a></li>
              <li class="Footer--link-wrapper"><a class="Footer--link" href="/tax-resources">Taxes</a></li>
              <li class="Footer--link-wrapper"><a class="Footer--link" href="https://opensea.io/blog" rel="nofollow noopener" target="_blank">Blog</a></li>
              <li class="Footer--link-wrapper"><a class="Footer--link" href="https://docs.opensea.io" rel="nofollow noopener" target="_blank">Docs</a></li>
              <li class="Footer--link-wrapper"><a class="Footer--link" href="https://opensea.io/blog/newsletter/" rel="nofollow noopener" target="_blank">Newsletter</a></li>
            </ul>
          </div>
          <div class="Footer--link-column">
            <h3 class="Footer--link-header">Company</h3>
            <ul class="Footer--link-list">
              <li class="Footer--link-wrapper"><a class="Footer--link" href="/about">About</a></li>
              <li class="Footer--link-wrapper"><a class="Footer--link" href="/careers">Careers</a></li>
              <li class="Footer--link-wrapper"><a class="Footer--link" href="/opensea-ventures">Ventures</a></li>
              <li class="Footer--link-wrapper"><a class="Footer--link" href="/opensea-grants">Grants</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Part */}
      <div className="footer-bottom">
        <div class="Footer--bottom-section">
          <p>© 2018 - 2022 Ozone Networks, Inc</p>
        </div>
        <div class="Footer--bottom-section">
          <a class="Footer--link" href="/privacy">Privacy Policy</a>
          <a class="Footer--link" href="/tos">Terms of Service</a>
        </div>
      </div>
    </div>
  )
}

export default Footer