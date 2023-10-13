import { useState, useEffect } from 'react'

import { useParams, Link } from 'react-router-dom'
import './Project.css'


export default function Project ({projects}) {

    const {chosenProject}  = useParams()
    const currentProject = projects.filter((project) => project.name === chosenProject)

    console.log(projects)
    console.log(currentProject)

    const {name, descr1, descr11, descr2, descr3Bold, descr3, descr4Bold, descr4, descr5Bold, descr5, link, linkDescr, github, link2, link2Descr, link3, link3Descr, link4, link4Descr} = currentProject[0]

    return (
        <>
            <h2>{name}</h2>
            <p>{descr1}</p>
            <p>{descr11}</p>
            <p>{descr2}</p>
            {github === "" ? null : <a href={github} target="blank"><button>Find the repository on </button></a>}
            <a href={link} target="blank"><button>{linkDescr}</button> </a>
            {link2 === "" ? null : <a href={link2} target="blank"><button>{link2Descr}</button> </a>}
            {link3 === "" ? null : <a href={link3} target="blank"><button>{link3Descr}</button> </a>}
            {link4 === "" ? null : <a href={link4} target="blank"><button>{link4Descr}</button> </a>}
            {descr3 === "" ? null : <p><strong>{descr3Bold}</strong>{" " +descr3}</p>}
            {descr4 === "" ? null : <p><strong>{descr4Bold}</strong>{" " +descr4}</p>}
            {descr5 === "" ? null : <p><strong>{descr5Bold}</strong>{" " +descr5}</p>}
            <a href={link4} target="blank">{link4Descr} </a>

                <div>
                        <Link to="/home">
                            <button>
                                <p>Back</p>
                            </button>   
                        </Link>
                    </div>
        
        </>
    )
}