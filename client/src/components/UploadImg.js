import React, { useState, useRef, useContext } from 'react';
import {NFTStorage,File} from 'nft.storage';
import abi from '../abi.json';
import axios from 'axios';
import Web3 from 'web3';
import "../utils/Font.css"
import Loading from '../Loding/Loading';
import Swal from 'sweetalert2';
import { AppContext } from '../AppContext';


const UploadImg = ({contact, imageSrc}) => {
  const context = useContext(AppContext);

  const {web3, contract, client} = context.state;
  console.log(web3, contract, client)

  const [loading,setLoading] = useState(false);

  const handleImagebutton = async() => {
    setLoading(true);
    contact.image=new File([imageSrc],{type:'image/jpg'});
    const metadata=contact;
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
    } catch(error) {
      console.error(error);
    }

    const result = await client.store(metadata);
    const account = await web3.eth.getAccounts(); // useContext에 추가되게 한번 구현해보자.

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
        setLoading(false);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 3000
        })
        window.location.replace("/create");
      }).catch(err=>{
        console.log(err);
      });

    })
    .on('error',(e)=>{
      console.log(e);
    })
  };

  return (
    <div style={{marginTop: "30px", border:"none", textAlign:"center", color:"white"}}>
      <p>파일 선택시 이미지가 위에 표시됩니다.</p>
      {loading ? <Loading/> : null}
      <button style={{fontFamiliy:"Poppins, sans-serif", borderRadius:"5px", backgroundColor: "#fcc866", width: "100px"}} label="업로드" onClick={handleImagebutton}>Mint</button>
    </div>
  )
}

export default UploadImg;