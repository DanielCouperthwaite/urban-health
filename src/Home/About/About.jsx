import { useState, useEffect } from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import { Box, Grow } from '@mui/material'

import face from "../../assets/face.png"
import ParticleEffectAbout from './ParticleEffectAbout'


export default function About () {

    const [loadOne, setLoadOne] =useState(false)
    const [loadTwo, setLoadTwo] =useState(false)

    useEffect(() => {

            window.scrollTo(0, 0)

            setTimeout(() => setLoadOne(true) , 500);
            setTimeout(() => setLoadTwo(true) , 1000);
           
        }, [])

    return (
        <>

            <ParticleEffectAbout />

            <Box>
                <Grow in={loadOne}>
                    <div className="about">
                    
                                        <div className='social-holder' style={{marginRight: "10px"}}>
                                        <Link to="/home">
                                            
                                                <p>{"x"}</p>
                                            
                                        </Link>
                                        </div>  
                    
                        
                        <h3 style={{marginTop: "-20px"}}>Hello!</h3>
                        <p>I'm Daniel Couperthwaite, a full stack developer based in Manchester.</p>
                        <img className='face' src={face} alt="Daniel smiling for the camera"/>
                    </div>
                    </Grow>    
                    <Grow in={loadTwo}>
                    <div className="about">
                        <p>I created this site to show off some of my skills, projects, coding experience and, hopefully, a little of me as well!</p>
                        <p>(And particle effects! Lots of particle effects!)</p>
                        <p>I am passionate about technology and always trying to learn new skills.</p>
                        <p>Outside of coding you can usually find me on a mountain somewhere, buried in a recipe book or trying for the thousandth time to finally play YYZ on guitar.</p>
                        <p>So come on in. I'll put the kettle on. Make yourself at home. </p>
                    

                        <div>
                                <Link to="/home">
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