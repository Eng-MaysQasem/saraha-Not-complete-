import React from 'react';
import './App.css';
import Navbar from './componants/Navbar/Navbar';
import Login from './componants/Login/Login';
import Home from './componants/Home/Home';
import Register from './componants/Register/Register';
import NotFound from './componants/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';
export default function App() {
  return (
    <div >
     <Navbar/>
    <Routes>
      <Route path='/Login'element={<Login/>}></Route>
      <Route path='/Home'element={<Home/>}></Route>
      <Route path='/Register'element={<Register/>}></Route>
      <Route path='*'element={<NotFound/>}></Route>


    </Routes>
    </div>
  )
}
