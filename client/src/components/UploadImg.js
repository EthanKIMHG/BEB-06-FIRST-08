import React, { useState, useRef } from 'react'
import axios from 'axios';

const UploadImg = ({contact, imageSrc}) => {
  const handleImagebutton = () => {
    console.log(contact, imageSrc)
  }
  return (
    <div>
      <button label="업로드" onClick={handleImagebutton}>Mint</button>
    </div>
  )
}

export default UploadImg;