import { useState, useEffect } from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import { Box, Grow } from '@mui/material'

import face from "../../assets/face.png"

export default function About () {

    const [load, setLoad] =useState(false)

    useEffect(() => {

            window.scrollTo(0, 0)

            setTimeout(() => setLoad(true) , 500);
           
        }, [])

    return (
        <>
            <Box>
                <Grow in={load}>
                    <div className="about">
                    
                    
                    
                        
                        <h3>Hello!</h3>
                        <p>I'm Daniel Couperthwaite, a full stack developer based in Manchester.</p>
                        <img className='face' src={face} alt="Daniel smiling for the camera"/>
                        <p>I created this site to show off some of my skills, projects, coding experience and, hopefully, a little of me as well!</p>
                        <p>(And particle effects! Lots of particle effects!)</p>
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