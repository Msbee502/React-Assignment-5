import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import Navbar from './pages/navbar.jsx';
import { Link} from 'react-router-dom';



function App () {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/video" element={<Video/>} />
        <Route path="/images" element={<Images/>} />
        <Route path="/maps" element={<Maps/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/signIn" element={<Sign in/>} />
      </Routes>
    
      </BrowserRouter>

    </div>
  );
}

export default App;