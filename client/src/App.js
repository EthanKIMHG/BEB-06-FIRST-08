import react from 'react';
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

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/create' element={<CreatePage />} />
    </Routes>
  )
}

export default App


