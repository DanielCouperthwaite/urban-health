import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Project.css'

// export const projectsArray = [
//     {
//         name: "Number Blast", 
//         descr1: "Welcome to number Blast, a reaction based number game designed to test your speed against the clock!",
//         descr2: "Built in Javascript with React, Firebase and tsParticles, Number Blast offers a fun and frantic gaming experience to challenge you and your freinds! How fast are you under pressure?",
//         descr3Bold: "States of Play.",
//         descr3: "Built in React with heavy use of state, effect and callback hooks to handle evolving game, level, timer and styling changes.",
//         descr4Bold: "Global Leaderboard.",
//         descr4: "What's wrong with a friendly competition? Maybe a lot when I can't even crack the top five of my own game any more! Do you have what it takes to reach the top spot?",
//         descr5Bold: "Interactive Styling.",
//         descr5: "Those background numbers are not just for show. Using tsParticles, they are fully interactive and even add to the frantic pace of higher game levels. Have you got what it takes to remain calm?",
//     },
// ]

export default function Project ({projects}) {

    const {chosenProject}  = useParams()
    const currentProject = projects.filter((project) => project.name === chosenProject)

    console.log(projects)
    console.log(currentProject)

    const {name, descr1, descr2, descr3Bold, descr3, descr4Bold, descr4, descr5Bold, descr5, link, linkDescr, github, link2, link2Descr, link3, link3Descr, link4, link4Descr} = currentProject[0]

    return (
        <>
            <h2>{name}</h2>
            <p>{descr1}</p>
            <p>{descr2}</p>
            <a href={github} target="blank">Find the repository on </a>
            <a href={link} target="blank">{linkDescr} </a>
            {link2 === "" ? null : <a href={link2} target="blank">{link2Descr} </a>}
            {link3 === "" ? null : <a href={link3} target="blank">{link3Descr} </a>}
            {link4 === "" ? null : <a href={link4} target="blank">{link4Descr} </a>}
            <p><strong>{descr3Bold}</strong>{" " +descr3}</p>
            <p><strong>{descr4Bold}</strong>{" " +descr4}</p>
            <p><strong>{descr5Bold}</strong>{" " +descr5}</p>
            <a href={link4} target="blank">{link4Descr} </a>

        
        </>
    )
}