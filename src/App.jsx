import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import './App.css'
import Hello from './Hello/Hello'
import Home from './Home/Home'
import About from "./Home/About/About";
import Project from "./Home/Project/Project";
import Donate from "./Home/Donate/Donate";
import Contact from "./Home/Contact/Contact";
import {projectsArray} from "./assets/projectsArray";
import bg1 from "./assets/bg1.png"

function App() {

  const [bg, setBg] = useState(bg1)

  return (
    <>
    <div class="whole">
      <BrowserRouter>

        <Routes>
          {/* <Route path="/" element={<Hello />} /> */}
          
          <Route path="/" element={<Home bg={bg} setBg={setBg} projects={projectsArray}/>} />
          <Route path="/about" element={<About bg={bg} setBg={setBg} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/project/:chosenProject" element={<Project projects={projectsArray}/>} />
        </Routes>
        
      </BrowserRouter>
    </div>
    </>
  )

}

export default App
