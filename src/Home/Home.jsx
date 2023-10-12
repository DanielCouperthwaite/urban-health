import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home () {

    return (
        <>
            <div>
                   
                <div>
                    <div>
                        <Link to="/about">
                            <button>
                                <h2>Daniel Couperthwaite</h2>
                                <p>About...</p>
                            </button>   
                        </Link>
                    </div>

                    <div>
                        <Link to="/tech">
                            <button>
                                <h2>Tech Skills</h2>
                            </button>   
                        </Link>
                    </div>

                    <div >

                        <div className='projects' >
                            <h2>Projects:</h2>

                            <Link  to="/project">
                                <button className='project-button'>
                                    <h2>Project</h2>
                                </button>
                            </Link>
                            <Link to="/project">
                                <button className='project-button'>
                                    <h2>Project</h2>
                                </button> 
                            </Link>

                        </div>

                        
                            

                            

                            
                        
                    
                    </div>
                </div>
                
            </div>
        </>
    )
}