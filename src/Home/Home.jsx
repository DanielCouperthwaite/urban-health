import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home ({projects}) {

    console.log(projects)

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
                                                                <Link  to={`/project/${project.name}`} projects={projects}>
                                                                    <button className='project-button'>
                                                                        <h2>{project.name}</h2>
                                                                        <p>{project.lang}</p>
                                                                        <img src={project.images} />
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