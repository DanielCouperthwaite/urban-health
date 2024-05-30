import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import ParticleEffectHome from './ParticleEffectHome'
import { Box, Grow } from '@mui/material'

import li from "../assets/linkedin.png"
import gh from "../assets/gh.png"

import name from "../assets/name.png"

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
                                            <a  href="https://www.linkedin.com/in/daniel-couperthwaite-209290139/" target='_blank'>
                                                <button className="social-link">
                                                    <img src={li} alt="linked in logo" style={{width: "60%", height: "auto"}}></img>
                                                </button>
                                            </a>
                                            <a href="https://github.com/DanielCouperthwaite" target='_blank'>
                                                <button className="social-link">
                                                    <img src={gh} alt="github logo" style={{width: "60%", height: "auto"}}></img>
                                                </button>
                                            </a>
                                        </div>    


                                
                                       <div style={{marginTop: "40px", marginBottom: "40px", marginLeft: "0", marginRight: "0"}}>
                                            <img className="name" src={name}></img>
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
                                                <h2>About Us</h2>
                                            </button>   
                                        </Link>
                        </div>
                        
                        <div className="options">
                                        <Link to="/tech">
                                            <button style={{borderRadius: "0px", borderLeft: "0px"}} className='home-button'>
                                                <h2>Contact</h2>
                                            </button>   
                                        </Link>
                                
                        </div>

                        <div className="options">
                                        <Link to="/tech">
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
                                    <p>Projects:</p>
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