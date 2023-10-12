import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Project.css'

export default function Project () {

    const {project}  = useParams()

    return (
        <>

            <p>{project} goes here</p>
        
        </>
    )
}