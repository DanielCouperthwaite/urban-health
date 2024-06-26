import { useState, useEffect } from 'react'
import './Donate.css'
import { Link } from 'react-router-dom'
import { Box, Grow } from '@mui/material'

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
                    <div className="donate">
                    
                                        <div className='social-holder' style={{marginRight: "10px"}}>
                                        <Link to="/">
                                            
                                                <p>{"x"}</p>
                                            
                                        </Link>
                                        </div>  
                                        

                    </div>
                    </Grow>    
                    <Grow in={loadTwo}>
                    <div className="donate">


                        <h3 style={{marginTop: "-20px"}}>Donate</h3>
                        <p>We can do what we do based on the strength of your donations. Follow the secure payment link below to donate as much or as little as you like:</p>
                        <div className='donate-holder'>
                            <a className="donation-link" target="blank" href="https://www.paypal.com/donate/?hosted_button_id=YHVX9U6QGKYPN">Donate with <img className='pp' src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-200px.png" border="0" alt="PayPal Logo"/> </a>
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