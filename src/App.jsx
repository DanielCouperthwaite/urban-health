import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react'
import './App.css'
import Hello from './Hello/Hello'
import Home from './Home/Home'
import About from "./Home/About/About";
import Project from "./Home/Project/Project";
import Tech from "./Home/Tech/Tech";

function App() {


  return (
    <>

      <BrowserRouter>
    
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/project" element={<Project />} />
          
        </Routes>
        
      </BrowserRouter>

    </>
  )

}

export default App
