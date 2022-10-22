import react, {useState} from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import MainPage from './pages/MainPage';
import { Routes, Route } from "react-router-dom";
import CreatePage from './pages/CreatePage';


function App() {

  //연결된 account의 주소값.
  const [account, setAccount] = useState('')

  //wallet connect 기능
  const handleWalletClick = async () => {
    let accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);
  }

  return (
    <Routes>
      <Route path='/' element={<MainPage handleWalletClick={handleWalletClick} account={account}/>} />
      <Route path='/create' element={<CreatePage handleWalletClick={handleWalletClick} account={account}/>} />
    </Routes>
  )
}

export default App


