import React, { useState } from 'react'
import { VscAccount as AccountIcon } from "react-icons/vsc";
import { BsWallet2 as WalletIcon } from "react-icons/bs";
import { BsCart as CartIcon } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom"

function Header() {
  const [input, setInput] = useState('');
  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const handleCartClick = () => {
    console.log(1);
  }
  const handleWalletClick = () => {
    console.log(1)
  }

  return (
    <div className="header-container">
      <div className="nav-wrapper">
        <nav className="navbar-main">
          <div className="brand-container">
            <a className="brand-home-link" href="/">
              <img className="logo-image" alt="Logo" src="https://storage.googleapis.com/opensea-static/Logomark/OpenSea-Full-Logo%20(dark).svg" />
            </a>
          </div>
          <div className="nav-search">
            <div className='nav-search-important'></div>
            <div className="nav-search2">
              <div className="nav-search-only" style={{ width: "100%" }}>
                <div className='nav-search-important2'>
                  <div className="nav-search-only2">
                    <div className="search-container" style={{ height: "72px,45px" }}>
                      <div className="search-wrapper" aria-expanded="false" aria-controls="NavSearch--results" role="combobox">
                        <BsSearch className='search-icon' />
                        <input className='search-input' placeholder="Search items, collections, and accounts" role="searchbox" type="search" value={input} onChange={handleChange} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="nav-link">
            <div className="link-container">
              <div className="link-wrapper">
                <li className="link-wrapper-explore" aria-expanded="false">
                  <a className="explore-link" href="/explore-collections">Explore</a>
                </li>
                <li className="link-wrapper-stats" aria-expanded="false">
                  <a className="stats-link" href="/explore-collections">Stats</a>
                </li>
                <li className="link-wrapper-resources" aria-expanded="false">
                  <a className="resources-link" href="/explore-collections">Resources</a>
                </li>
                <li className="link-wrapper-create" aria-expanded="false">
                  <a className="create-link" href="/explore-collections">Create</a>
                </li>
              </div>
            </div>
            <div className="icon-container">
              <div className="icon-wrapper">
                <div className="icon-block-account">
                  <li className="account-wrapper" aria-expanded="false">
                    <a className="account-link" href="/account">
                      <AccountIcon className="nav-icon-account" size="32" title="Account" value="account_circle" />
                    </a>
                  </li>
                </div>
                <div className="icon-block-wallet">
                  <li className="wallet-wrapper">
                    <div className="wallet-connect" style={{ width: "100%" }}>
                      <button className="wallet" type="button" onClick={handleWalletClick}>
                        <WalletIcon className="wallet-icon" size="32" title="Wallet" value="account_balance_wallet" />
                      </button>
                    </div>
                  </li>
                </div>
                <div className="icon-block-cart">
                  <li className="cart-wrapper">
                    <div className="cart-link" style={{ width: "100%" }}>
                      <button className="cart" type="button" onClick={handleCartClick}>
                        <CartIcon className="cart-icon" size="32" title="Cart" value="shopping_cart" />
                      </button>
                    </div>
                  </li>
                  <aside className="link-aside" style={{ width: "375px" }}></aside>
                  <div className="sc-a1ce9f60-0 HTmFc fresnel-greaterThanOrEqual-lg" aria-hidden="true"></div>
                </div>
                <div className="fresnel-container fresnel-lessThan-lg "></div>
              </div>
            </div>
            <div class="fresnel-container fresnel-between-lg-xl "></div>
            <div class="fresnel-container fresnel-between-sm-lg "></div>
            <li>
              <div class="fresnel-container fresnel-lessThan-sm "></div>
            </li>
          </ul>
        </nav>
      </div >
    </div >
  )
}

export default Header