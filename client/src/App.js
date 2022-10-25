import {useState, useEffect} from 'react';
import MainPage from './pages/MainPage';
import { Routes, Route } from "react-router-dom";
import CreatePage from './pages/CreatePage';
import AccountPage from './pages/AccountPage';
import Web3 from 'web3';
import axios from "axios"
import { AppContext } from './AppContext';
import {NFTStorage} from 'nft.storage';
import Swal from 'sweetalert2';
import abi from './abi/abi.json';


// MainPage에 넘겨줄 db list
// 여기에 만들면, page별로 다 뿌릴 수 있다.


function App() {
  //연결된 account의 주소값.
  const [account, setAccount] = useState('')
  const [collectionList, setCollectionList] = useState('');
  const web3 = window.ethereum ? new Web3(window.ethereum) : null;
  const contract = web3 ? new web3.eth.Contract(abi,'0xa7f945f986f244A794c84B0270Eb35E1Aa91Bd87'):null;
  const client = new NFTStorage({ token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGU3MmYyYzMyMUUzZmEwMmU4MDlkODFhYWJhOWRFMjg3NjNGMUEyNWIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2NjUwMTY1ODM0MCwibmFtZSI6InNpbnN1In0.BlSLUWAZMaXtDKs43HTrxBhypSTcU-gSIFee-nRME18'});
  
  const handleWalletClick = async () => {
    try{
      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
    }catch(e){
      Swal.fire({
        title: '메타마스크 연결을 확인해주세요.',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    }
    
  }

  const context = {
    state: {
      account: account,
      collectionList: collectionList,
      web3: web3,
      contract: contract,
      client: client
    },
    action: {
      handleWalletClick: handleWalletClick
  }}
  // const [web3, setWeb3] = useState();
  // useEffect(() => {
  //     if (typeof window.ethereum !== "undefined") { // window.ethereum이 있다면
  //         try {
  //             const web = new Web3(window.ethereum);  // 새로운 web3 객체를 만든다
  //             setWeb3(web);
  //         } catch (err) {
  //             console.log(err);
  //         }
  //     }
  //   }, []);

  //첫 페이지 렌더링시 NFT 리스트 가져오기. 그리고 collectionList를 하위 컴포넌트로 보냅니다.
  useEffect(() => {
    axios.post("http://localhost:5001/call/nftload")
    .then(res => {
      const data =res.data.data;
      setCollectionList(data);
    })
    .catch(e => {console.log(e)})
  },[])

  //wallet connect 기능
 

  return (
    <AppContext.Provider value={context}>
      <Routes>
        <Route path='/' element={ <MainPage />}/>
        <Route path='/create' element={<CreatePage />}/>
        <Route path='/account' element={<AccountPage />} />
      </Routes>
    </AppContext.Provider>
  )
}

export default App


