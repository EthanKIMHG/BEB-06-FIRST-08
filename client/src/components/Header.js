import React, { useState, useEffect, useContext } from 'react'
import { VscAccount as AccountIcon } from "react-icons/vsc";
import { BsWallet2 as WalletIcon } from "react-icons/bs";
import { BsCart as CartIcon } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import "../utils/Header.css"
import { NavLink } from 'react-router-dom';
import { AppContext } from '../AppContext';
import axios from 'axios'

function Header() {
  const [address, setAddress] = useState('');
  const context = useContext(AppContext);
  console.log(context)
  //const [nftList, setNftList] = useState([]);
  // 처음 렌더링 될때만 실행하게끔. DB에서 데이터를 불러온다.
  /*   useEffect((req, res) => {
      // nftLoad
      setNftList(res.data);
    }, []); */

  //검색할때 리스트 안에서 nftList 안에서 필터링.
  // 필터링 한

  const handleChange = (e) => {
    setAddress(e.target.value)
  };

  // 기능
  // mainPage에서 처음에, DB에서 리스트 불러오기. useEffect
  // list 받아서 useState에 넣어놓기 useEffect함수 안에
  // mainPage에서 section부분에 전달.

  //서버로 address값 req 로 보내기
  const handleSubmit = async (e) => {
    // 올바른 값이 아니면, 아래와 같이 popup이 나오게끔. 아래는 예시. axios를 보내서 return 값이 없으면? popup을 보낼 수도있고.
    //(address.length === 16 ? console.log(1) : alert("wrong format"));
    e.preventDefault();
    try {
      //const result = await axios.get(`http://localhost:5000/nftload/${address}`);

    } catch (e) {
      console.log(e);
      return e;
    }
  }
  // 장바구니로 이동.
  const handleCartClick = () => {
  }

  return (
    <div className="header-container">
      <div className="nav-wrapper">
        <nav className="navbar-main">
          <div className="brand-container">
            <a className="brand-home-link" href="/">
              <img className="logo-image" alt="Logo" src="https://storage.googleapis.com/opensea-static/Logomark/OpenSea-Full-Logo%20(light).svg" />
            </a>
          </div>
          <div className="nav-search">
            <div className='fresnel-container fresnel-lessThan-sm'></div>
            <div className="nav-search2">
              <div className="nav-search-only">
                <div className='fresnel-container fresnel-greaterThanOrEqual-sm '>
                  <div className="nav-search-only2">
                    <div className="search-container" style={{ height: "72px,45px" }}>
                      <form className="search-wrapper" aria-expanded="false" aria-controls="NavSearch--results" role="combobox" onSubmit={handleSubmit}>
                        <BsSearch className='search-icon' size={"19px"} />
                        <input aria-label={"Search Opensea"} aria-multiline={false} className='search-input' placeholder="Search items, collections, and accounts" role="searchbox" type="search" value={address} onChange={handleChange} />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="nav-link">
            <div className="fresnel-container fresnel-greaterThanOrEqual-xl">
              <div className="link-wrapper">
                <li className="link-wrapper-explore" aria-expanded="false">
                  <a className="explore-link" href="/explore-collections">Explore</a>
                </li>
                <li className="link-wrapper-stats" aria-expanded={false}>
                  <a className="stats-link" href="/explore-collections">Stats</a>
                </li>
                <li className="link-wrapper-resources" aria-expanded={false}>
                  <a className="resources-link" href="/explore-collections">Resources</a>
                </li>
                <li className="link-wrapper-create" aria-expanded={false}>
                  <NavLink to="/create" className="create-link" href="/explore-collections">Create</NavLink>
                </li>
              </div>
            </div>
            <div className='fresnel-container fresnel-greaterThanOrEqual-lg'>
              <div className="icon-wrapper">
                <div className="icon-block-account">
                  <li className="account-wrapper" aria-expanded="false">
                    <NavLink to="/account" className="account-link">
                      <AccountIcon className="nav-icon-account" size="32" title="Account" value="account_circle" />
                    </NavLink>
                  </li>
                </div>
                <div className="icon-block-wallet">
                  <li className="wallet-wrapper">
                    <div className="wallet-connect" style={{ width: "100%" }}>
                      <button className="wallet" type="button" onClick={context.action.handleWalletClick}>
                        <WalletIcon className="wallet-icon" size="32" title="Wallet" value="account_balance_wallet" />
                      </button>
                    </div>
                  </li>
                </div>
                <div className="fresnel-container fresnel-greaterThanOrEqual-lg">
                  <li className="cart-wrapper">
                    <div className="cart-link">
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