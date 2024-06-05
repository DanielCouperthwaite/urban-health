import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import ParticleEffectHome from './ParticleEffectHome'
import { Box, Grow } from '@mui/material'

import logo1 from "../assets/UrbanHealth1.png"

import fb from "../assets/facebook-logo.png"
import ig from "../assets/instagram-logo.png"
import tw from "../assets/twitter-logo.png"

import bg from "../assets/bg.jpg"

import footballers from "../assets/footballers.jpg"

export default function Home ({projects}) {

    const [aboutLoad, setAboutLoad] = useState(false)
    const [techLoad, setTechLoad] = useState(false)
    const [projectLoad, setProjectLoad] = useState(false)

    useEffect(() => {

        window.scrollTo(0, 0)

        setTimeout(() => setAboutLoad(true) , 500);
        setTimeout(() => setTechLoad(true) , 1000);
        setTimeout(() => setProjectLoad(true), 1500);
    }, [])

    return (
        <>
          
            {/* <ParticleEffectHome />   */}

            
            <div>
                <div>
                   <Box>
                        <Grow in={aboutLoad}>
                            <div className='home-info'>
                            <div>
                        
                        
                                        <div className='social-holder'>
                                            <a  href="https://www.facebook.com/share/JNqew8PHdicTvR1N/?mibextid=LQQJ4d" target='_blank'>
                                                <button className="social-link">
                                                    <img src={fb} alt="Facebook logo" style={{width: "60%", height: "auto"}}></img>
                                                </button>
                                            </a>
                                            <a href="https://www.instagram.com/urbanhealthuk2024?igsh=MWN2MGVtcTFvdW01MQ%3D%3D&utm_source=qr" target='_blank'>
                                                <button className="social-link">
                                                    <img src={ig} alt="Instagram Logo" style={{width: "60%", height: "auto"}}></img>
                                                </button>
                                            </a>
                                            <a href="https://twitter.com/UrbanHealthUK24" target='_blank'>
                                                <button className="social-link">
                                                    <img src={tw} alt="Twitter Logo" style={{width: "60%", height: "auto"}}></img>
                                                </button>
                                            </a>
                                        </div>    


                                
                                       <div style={{marginTop: "40px", marginBottom: "40px", marginLeft: "0", marginRight: "0"}}>
                                            <img className="logo" src={logo1}></img>
                                            {/* <p>Full Stack Developer</p> */}
                                       </div>    
                                </div> 
                            </div>
                        </Grow>
                    </Box>

                    
                    <Box>
                    <Grow in={techLoad}>
                    <div className='option-holder'>
                        <div
                        className="options" >
                            
                                        <Link to="/about">
                                            <button style={{borderTopRightRadius: "0px", borderBottomRightRadius: "0px"}} className='home-button'>
                                                <h2>About</h2>
                                            </button>   
                                        </Link>
                        </div>
                        
                        <div className="options">
                                        <Link to="/contact">
                                            <button style={{borderRadius: "0px", borderLeft: "0px"}} className='home-button'>
                                                <h2>Contact</h2>
                                            </button>   
                                        </Link>
                                
                        </div>

                        <div className="options">
                                        <Link to="/donate">
                                            <button style={{borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px", borderLeft: "5px"}} className='home-button'>
                                                <h2>Donate</h2>
                                            </button>   
                                        </Link>
                                
                        </div>


                        
                    </div>

                    
                    </Grow>
                    </Box>


                    <Box>
                        <Grow in={projectLoad}>
                        <div style={{width: "100%", margin: "0", padding: "0"}}>
                                <div className='project-titles'>
                                    <p className='whatsOn'>What's on</p>
                                </div >
                                
                                
                                {projects.map((project) => {
                                                        return (
                                                            <>
                                                                <Link  to={`/project/${project.name}`} projects={projects}>
                                                                    <button className='project-button' styles={{marginTop: "0"}}>
                                                                        <h2>{project.name}</h2>
                                                                        <img className="homeImage" src={project.thumbnail} />
                                                                        <p>{project.lang}</p>
                                                                    </button>
                                                                </Link>
                                                            </>
                                                        )
                                                    })}
                                
                            </div>
                        </Grow>
                    </Box>
                </div>
                
            </div>
            
        </>
    )
}