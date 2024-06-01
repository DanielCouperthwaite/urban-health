import { useState, useEffect } from 'react'
import './Donate.css'
import { Link } from 'react-router-dom'
import { Box, Grow } from '@mui/material'

import face from "../../assets/face.png"
import ParticleEffectAbout from '../About/ParticleEffectAbout'


export default function Donate () {

    const [loadOne, setLoadOne] =useState(false)
    const [loadTwo, setLoadTwo] =useState(false)

    useEffect(() => {

            window.scrollTo(0, 0)

            setTimeout(() => setLoadOne(true) , 500);
            setTimeout(() => setLoadTwo(true) , 1000);
           
        }, [])

    return (
        <>

            {/* <ParticleEffectAbout /> */}

            <Box>
                <Grow in={loadOne}>
                    <div className="about">
                    
                                        <div className='social-holder' style={{marginRight: "10px"}}>
                                        <Link to="/">
                                            
                                                <p>{"x"}</p>
                                            
                                        </Link>
                                        </div>  
                    
                        
                        <h3 style={{marginTop: "-20px"}}>Technical Skills</h3>
                        <p>What's a developer without their tools? Here you can see some of the tech I have experience building sites, APIs and apps with.</p>
                        <p>This website built with Javascript, React and a little bit of love.</p>
                    </div>
                    </Grow>    
                    <Grow in={loadTwo}>
                    <div className="about">
                        <div className='tech-info'>
                            <p className='tech-span'><strong>Languages: </strong></p>
                            <p className='tech-p'>Javascript, Typescript, C#, ASP.NET</p>
                            <p className='tech-span'><strong>Front-End:</strong></p>
                            <p className='tech-p'>React, React Native, HTML5, CSS3, Tailwind CSS, Bootstrap CSS</p>
                            <p className='tech-span'><strong>Back-End:</strong></p>
                            <p className='tech-p'>Express, test driven development with Jest, seeding databases, PostgreSQL, Firebase</p>
                            <p className='tech-span'><strong>Development:</strong></p>
                            <p className='tech-p'>AGILE Methodologies, paired programming, working in and managing scrums, live hosting through Render and Netlify</p>
                        </div>
                        
                        <div>
                                <Link to="/">
                                    <button style={{maxWidth: "200px"}}>
                                        <p>Back</p>
                                    </button>   
                                </Link>
                            </div>
                    
                    
                    </div>
                </Grow> 
            </Box>    
        </>
    )
}