import React, { useState } from 'react'
import Header from '../components/Header'
import Section from '../components/Section'
import Footer from '../components/Footer'


function MainPage({handleWalletClick}) {
  return (
    <>
      <Header handleWalletClick={handleWalletClick}/>
      <Section />
      {/* <Footer /> */}
    </>
  )
}

export default MainPage