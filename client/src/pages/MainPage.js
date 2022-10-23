import React, { useState } from 'react'
import Header from '../components/Header'
import Section from '../components/Section'
import Footer from '../components/Footer'


function MainPage({handleWalletClick, account, collectionList}) {
  return (
    <>
      <Header handleWalletClick={handleWalletClick} account={account} />
      <Section collectionList={collectionList}/>
      {/* <Footer /> */}
    </>
  )
}

export default MainPage