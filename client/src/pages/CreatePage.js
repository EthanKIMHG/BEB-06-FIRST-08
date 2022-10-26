import React, { useContext, useEffect } from 'react'
import Header from '../components/Header';
import NftCard from '../components/NftCard'
import { AppContext } from '../AppContext'
import Footer from "../components/Footer"
import "../utils/CreatePage.css"

function CreatePage() {
  const context = useContext(AppContext);
  const {account} = context.state;
  const {handleWalletClick} = context.action;

  useEffect(() => {
    if (!account) {
      handleWalletClick();
    } else {
      return;
    }
  });

  return (
    <>
      <Header />
      <div className='create-card'>
        <span className='create-message'>현재 당신의 계정은<br/>
          <p>{(context.state.account ? context.state.account : '계정을 연결하세요.')}</p>
        </span>
        <NftCard />
      </div>
      <Footer />
    </>
  )
}

export default CreatePage

