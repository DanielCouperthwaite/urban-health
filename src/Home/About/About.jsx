import { useState, useEffect } from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import { Box, Grow } from '@mui/material'

import ParticleEffectAbout from './ParticleEffectAbout'

import { aboutData } from '../../assets/aboutData'


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

            {/* <ParticleEffectAbout /> */}

            <Box>
                <Grow in={loadOne}>
                    <div className="about">
                    
                                        <div className='social-holder' style={{marginRight: "10px"}}>
                                        <Link to="/">
                                            
                                                <p>{"x"}</p>
                                            
                                        </Link>
                                        </div>  
                    
                        
                        <h3 style={{marginTop: "-20px"}}>{aboutData.title}</h3>
                        <p>{aboutData.descr}</p>
                        <p>{aboutData.descr1p5}</p>
                        <h2>***nice image here***</h2>
                        <div>
                            <h2>Meet the Directors</h2>
                            <div style={{display: "flex", textAlign: "center"}}>

                            
                                <div style={{width: "33%"}}>
                                    <img className='face' src={aboutData.images[0]} alt=""/>
                                    <p className='name'>Daniel Hogan</p>
                                    <p className='dir-descr'>Mental Health Nurse</p>
                                </div>
                                <div style={{width: "33%"}}>
                                    <img className='face' src={aboutData.images[1]} alt=""/>
                                    <p className='name'>Christine Maxwell</p>
                                    <p className='dir-descr'>Mental Health Nurse</p>
                                </div>
                                <div style={{width: "33%"}}>
                                    <img className='face' src={aboutData.images[2]} alt=""/>
                                    <p className='name'>Martins Okunrobo</p>
                                    <p className='dir-descr'>Occupational Therapist</p>
                                </div>
                                
                            </div>

                            </div>
                        
                    </div>
                    </Grow>    
                    <Grow in={loadTwo}>
                    <div className="about">
                        <p>{aboutData.descr2}</p>
                        <p>{aboutData.descr3}</p>
                        <p>{aboutData.descr4}</p>
                        <p>{aboutData.descr5}</p>
                    
                        <h2>**ADD REFERRAL LINK**</h2>
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