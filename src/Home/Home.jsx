import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home () {

    const projects = [
        "project1",
        "project2",
        "project3"
    ]

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

                    

                        <div className='projects' >
                            <h2>Projects:</h2>
                                {projects.map((project) => {
                                                        return (
                                                            <>
                                                                <Link  to={`/project/${project}`} >
                                                                    <button className='project-button'>
                                                                        <h2>{project}</h2>
                                                                    </button>
                                                                </Link>
                                                            </>
                                                        )
                                                    })}
                            
                            

                        </div>

                </div>
                
            </div>
        </>
    )
}