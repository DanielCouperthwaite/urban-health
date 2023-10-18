import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import ParticleEffectHome from './ParticleEffectHome'
import { Box, Fade, Grow, Slide } from '@mui/material'

export default function Home ({projects}) {

    const [aboutLoad, setAbout] = useState(true)
    const [techLoad, setTech] = useState(true)
    const [projectLoad, setProjectLoad] = useState(true)

    return (
        <>
            <ParticleEffectHome />
            

            
            <div>
                <div>
                   <Box>
                        <Grow in={aboutLoad}>
                
                            <div>
                                <Link to="/about">
                                    <button className='home-button'>
                                        <h2>Daniel Couperthwaite</h2>
                                        <p>About...</p>
                                    </button>   
                                </Link>
                            </div>
                        </Grow>
                    </Box>

                    <Box>
                        <Grow in={techLoad}>
                            <div>
                                <Link to="/tech">
                                    <button className='home-button'>
                                        <h2>Tech Skills</h2>
                                    </button>   
                                </Link>
                            </div>
                        </Grow>
                    </Box>
                    
                    <Box>
                        <Grow in={projectLoad}>
                        <div className='projects' >
                            <h2>Projects:</h2>
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