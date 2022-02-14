import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Products from './components/pages/Products'
import Services from './components/pages/Services'
import SignUp from './components/pages/SignUp'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/products' element= {<Products />} />
          <Route path='/services' element= {<Services />} />
          <Route path='/sign-up' element= {<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
