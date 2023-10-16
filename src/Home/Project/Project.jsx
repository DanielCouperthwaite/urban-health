import { useState, useEffect } from 'react'
import Carousel, { NextButton } from "nuka-carousel"

import { useParams, Link } from 'react-router-dom'
import './Project.css'


export default function Project ({projects}) {


    const {chosenProject}  = useParams()
    const currentProject = projects.filter((project) => project.name === chosenProject)

    console.log(projects)
    console.log(currentProject)

    const {name, descr1, descr11, descr2, descr3Bold, descr3, descr4Bold, descr4, descr5Bold, descr5, link, linkDescr, github, link2, link2Descr, link3, link3Descr, link4, link4Descr, images} = currentProject[0]

    return (
        <>
            <h2>{name}</h2>
            <p>{descr1}</p>
            <p>{descr11}</p>
            <p>{descr2}</p>
            {github === "" ? null : <a href={github} target="blank"><button>Find the repository on </button></a>}
            {link === "" ? null : <a href={link} target="blank"><button>{linkDescr}</button> </a>}
            {link2 === "" ? null : <a href={link2} target="blank"><button>{link2Descr}</button> </a>}
            {link3 === "" ? null : <a href={link3} target="blank"><button>{link3Descr}</button> </a>}
            {link4 === "" ? null : <a href={link4} target="blank"><button>{link4Descr}</button> </a>}
            {descr3 === "" ? null : <p><strong>{descr3Bold}</strong>{" " +descr3}</p>}
            {descr4 === "" ? null : <p><strong>{descr4Bold}</strong>{" " +descr4}</p>}
            {descr5 === "" ? null : <p><strong>{descr5Bold}</strong>{" " +descr5}</p>}

            <div className='image-holder'>
                <Carousel 
                    adaptiveHeight='true'
                    cellAlign='center' 
                    wrapAround="true" 
                    autoplay="true" 
                    speed={500} 
                    autoplayInterval={8000}
                    renderCenterLeftControls={({ previousSlide }) => (
                        <button className='slide-buttons' onClick={previousSlide}>{"<"}</button>
                      )}
                    renderCenterRightControls={({ nextSlide }) => (
                        <button className='slide-buttons' onClick={nextSlide}>{">"}</button>
                      )}
                    
                >
                  {images.map(image => <img className='screenshot' src={image} alt={`Screenshot of ${name} project`}/>)}
                </Carousel>
            </div>
            

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