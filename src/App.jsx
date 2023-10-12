import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react'
import './App.css'
import Hello from './Hello/Hello'
import Home from './Home/Home'

function App() {


  return (
    <>

      <BrowserRouter>
    
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="/Home" element={<Home />} />
          
        </Routes>
        
      </BrowserRouter>

    </>
  )

}

export default App
