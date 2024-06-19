import { useState, useEffect } from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
import { Box, Grow } from '@mui/material'

import face from "../../assets/face.png"
import ParticleEffectAbout from '../About/ParticleEffectAbout'


export default function Contact () {

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
                    
                        
                        <h3 style={{marginTop: "-20px"}}>Contact</h3>
                        <p>See below for details on where to contact us, or fill in a referral form and we will get back to you as soon as possible!</p>
                    </div>
                    </Grow>    
                    <Grow in={loadTwo}>
                    <div className="about">
                    <div>
                            <div style={{textAlign: "center", marginBottom: "80px"}}>
                                        <Link target="blank" to="https://emea01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fform.jotform.com%2F241347125439052&data=05%7C02%7C%7C2e6fbbd2d57342fee1fe08dc8bbcc227%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638538890033979462%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&sdata=hfgNwuPjpt9ODcEcLUFTDorikzqgQnoIvugrdoDSROE%3D&reserved=0">
                                            <button style={{width: "500px"}}>
                                                <p style={{fontSize: "1.5rem"}} className='button-text'>Referral Form</p>
                                            </button>   
                                        </Link>
                            </div>
                        </div>
                        <div className='tech-info'>
                            <p className='tech-span'><strong>Email: </strong></p>
                            <p className='tech-p'>example@email.com</p>
                            <p className='tech-span'><strong>Phone:</strong></p>
                            <p className='tech-p'>0123456789</p>
                            <p className='tech-span'><strong>Donations:</strong></p>
                            <p className='tech-p'>www.donations-example.com</p>
                            <p className='tech-span'><strong>Find us on:</strong></p>
                            <p className='tech-p'>Social Media Links Here</p>
                        </div>
                        
                        <div>
                            <div style={{textAlign: "center"}}>
                                        <Link to="/">
                                            <button style={{width: "200px"}}>
                                                <p className='button-text'>Back</p>
                                            </button>   
                                        </Link>
                            </div>
                        </div>
                    
                    
                    </div>
                </Grow> 
            </Box>    
        </>
    )
}