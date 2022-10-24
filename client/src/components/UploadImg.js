import React, { useState, useRef } from 'react';
import {NFTStorage,File} from 'nft.storage';
import abi from '../abi.json';
import axios from 'axios';
import Web3 from 'web3';

const web3 = window.ethereum ? new Web3(window.ethereum) : null; 
const contract = web3 ? new web3.eth.Contract(abi,'0x155cBa278fC69f4E4D91CD35cfCab2174721c7c6'):null;
const client = new NFTStorage({ token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGU3MmYyYzMyMUUzZmEwMmU4MDlkODFhYWJhOWRFMjg3NjNGMUEyNWIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2NjUwMTY1ODM0MCwibmFtZSI6InNpbnN1In0.BlSLUWAZMaXtDKs43HTrxBhypSTcU-gSIFee-nRME18'});

const UploadImg = ({contact, imageSrc}) => {

  const handleImagebutton = async() => {

    contact.image=new File([imageSrc],{type:'image/jpg'});
    const metadata=contact;
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });  
    } catch(error) {
      console.error(error);
    }
    const result = await client.store(metadata);
    const account = await web3.eth.getAccounts();

    contract.methods.mintNFT(result.ipnft,contact.price).send({from:account[0]})
    .on('transactionHash',(hash)=>{
      metadata.image=imageSrc;
      metadata.account=account[0];
      metadata.url = result.url;
      axios.post('http://localhost:5001/call/mint',JSON.stringify(metadata),{
        headers:{
          "Content-Type": 'application/json',
        },
      })
      .then((res)=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      });

    })
    .on('error',(e)=>{
      console.log(e);
    })
  };

  return (
    <div>
      <button label="업로드" onClick={handleImagebutton}>Mint</button>
    </div>
  )
}

export default UploadImg;