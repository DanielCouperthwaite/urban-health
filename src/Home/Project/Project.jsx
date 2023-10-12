import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Project.css'

export default function Project ({projects}) {

    const {chosenProject}  = useParams()
    const currentProject = projects.filter((project) => project.name === chosenProject)

    console.log(projects)
    console.log(currentProject)

    return (
        <>

            <p>{chosenProject} goes here</p>
            <p>{currentProject[0].name}</p>
            <p>{currentProject[0].descr1}</p>

        
        </>
    )
}