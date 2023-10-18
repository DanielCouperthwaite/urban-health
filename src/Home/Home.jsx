import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import ParticleEffectHome from './ParticleEffectHome'
import { Box, Fade, Grow, Slide } from '@mui/material'

export default function Home ({projects}) {

    const [aboutLoad, setAboutLoad] = useState(false)
    const [techLoad, setTechLoad] = useState(false)
    const [projectLoad, setProjectLoad] = useState(false)
    const [particleLoad, setParticleLoad] = useState(false)

    useEffect(() => {
        setTimeout(() => setParticleLoad(true) , 500);
        setTimeout(() => setAboutLoad(true) , 1000);
        setTimeout(() => setTechLoad(true) , 2000);
        setTimeout(() => setProjectLoad(true), 3000);
    }, [])

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