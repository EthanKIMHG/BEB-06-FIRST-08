import react, {useState, useEffect} from 'react';
import MainPage from './pages/MainPage';
import { Routes, Route } from "react-router-dom";
import CreatePage from './pages/CreatePage';
import Web3 from 'web3';
import axios from "axios"

// MainPage에 넘겨줄 db list
// 여기에 만들면, page별로 다 뿌릴 수 있다.

function App() {

  //연결된 account의 주소값.
  const [account, setAccount] = useState('')
  const [collectionList, setCollectionList] = useState([]);
  const [web3, setWeb3] = useState();


  useEffect(() => {
      if (typeof window.ethereum !== "undefined") { // window.ethereum이 있다면
          try {
              const web = new Web3(window.ethereum);  // 새로운 web3 객체를 만든다
              setWeb3(web);
          } catch (err) {
              console.log(err);
          }
      }
    }, []);


  //첫 페이지 렌더링시 NFT 리스트 가져오기. 그리고 collectionList를 하위 컴포넌트로 보냅니다.
  
  useEffect(() => {
/*     axios.get("http://localhost:5000/api/nftload")
    .then(res => {
      setCollectionList(rea.data);
    }).catch(e => {console.log(e)}) */
  },[])

  //wallet connect 기능
  const handleWalletClick = async () => {
    let accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);
  }


  return (
    <Routes>
      <Route path='/'element={
        <MainPage
          handleWalletClick={handleWalletClick}
          account={account}
          collectionList={collectionList}
        />
      }/>
      <Route path='/create' element={<CreatePage handleWalletClick={handleWalletClick} account={account}/>} />
    </Routes>
  )
}

export default App


