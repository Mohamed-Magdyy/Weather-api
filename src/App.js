// import logo from './logo.svg';
import './App.css';
import { Routes,Route, useNavigate, Navigate } from 'react-router-dom';
import NavBar from './Compoant/NavBar/NavBar';
import Weather from './Compoant/Weather/Weather';
import Search from './Compoant/Search/Search';
import BackGround from './Compoant/BackGround/BackGround';
import Footer from './Compoant/Footer/Footer';




function App() {
  const KEY="";
  const url ="https://api.openweathermap.org/data/2.5/weather?q=Egypt&appid="

  return (
  <>
  <NavBar/>
  <BackGround />
  
    <Routes>
    <Route path='/' element={<Weather   />} />
    <Route path='weather' element={<Weather  />}  />
    <Route path='search' element={<Search  />}  />
   </Routes>
    </>
  );
}

export default App;
