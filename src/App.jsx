import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react'
import './App.css'
import Hello from './Hello/Hello'
import Home from './Home/Home'
import About from "./Home/About/About";
import Project from "./Home/Project/Project";
import Donate from "./Home/Donate/Donate";
import Contact from "./Home/Contact/Contact";
import {projectsArray} from "./assets/projectsArray";

function App() {


  return (
    <>

      <BrowserRouter>
    
        <Routes>
          {/* <Route path="/" element={<Hello />} /> */}
          <Route path="/" element={<Home projects={projectsArray}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/project/:chosenProject" element={<Project projects={projectsArray}/>} />
        </Routes>
        
      </BrowserRouter>

    </>
  )

}

export default App
