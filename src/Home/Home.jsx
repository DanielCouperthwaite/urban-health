import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import ParticleEffectHome from './ParticleEffectHome'
import { Box, Fade, Grow, Slide } from '@mui/material'

import face from "../assets/face.png"
import li from "../assets/linkedin.png"
import gh from "../assets/gh.png"

export default function Home ({projects}) {

    const [aboutLoad, setAboutLoad] = useState(false)
    const [techLoad, setTechLoad] = useState(false)
    const [projectLoad, setProjectLoad] = useState(false)
    const [particleLoad, setParticleLoad] = useState(false)

    useEffect(() => {

        window.scrollTo(0, 0)

        setTimeout(() => setAboutLoad(true) , 500);
        setTimeout(() => setTechLoad(true) , 1000);
        setTimeout(() => setProjectLoad(true), 1500);
    }, [])

    return (
        <>
          
            <ParticleEffectHome />  


            
            <div>
                <div>
                   <Box>
                        <Grow in={aboutLoad}>
                            <div className='home-info'>
                            <div>
                        
                        
                            <div className='social-holder'>
                                            <a  href="https://www.linkedin.com/in/daniel-couperthwaite-209290139/" target='_blank'>
                                                <button className="social-link">
                                                    <img src={li}></img>
                                                </button>
                                            </a>
                                            <a href="https://www.linkedin.com/in/daniel-couperthwaite-209290139/" target='_blank'>
                                                <button className="social-link">
                                                    <img src={gh}></img>
                                                </button>
                                            </a>
                                        </div>    


                                
                                       <div>
                                            <h1>Daniel Couperthwaite</h1>
                                            <p>Full Stack Developer</p>
                                       </div>    
                                </div> 
                            </div>
                        </Grow>
                    </Box>

                    

                    <div className='option-holder'>
                        <Box className="options">
                            
                                <Grow in={techLoad}>
                                    
                                        <Link to="/about">
                                            <button className='home-button'>
                                                <h2>About Me</h2>
                                            </button>   
                                        </Link>
                                   
                                </Grow>
                            
                        </Box>
                        
                        <Box className="options">
                            
                                <Grow in={techLoad}>
                                   
                                        <Link to="/tech">
                                            <button className='home-button'>
                                                <h2>Tech Skills</h2>
                                            </button>   
                                        </Link>
                                    
                                </Grow>
                            
                                
                        </Box>
                    </div>
                    
                    
                    <Box>
                        <Grow in={projectLoad}>
                        <div styles={{width: "100%", margin: "0", padding: "0"}}>
                        
                                {projects.map((project) => {
                                                        return (
                                                            <>
                                                                <Link  to={`/project/${project.name}`} projects={projects}>
                                                                    <button className='project-button'>
                                                                        <h2>{project.name}</h2>
                                                                        <p>{project.lang}</p>
                                                                        <img className="homeImage" src={project.images[0]} />
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