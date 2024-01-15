import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import { Layout } from './component/page/Layout';
import { Home } from './component/page/Home';
import { Contact } from './component/page/contact/Contact';
import  About  from './component/page/About';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>

          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

        </Route>

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
