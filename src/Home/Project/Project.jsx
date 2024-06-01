import { useState, useEffect } from 'react'
import Carousel, { NextButton } from "nuka-carousel"

import { useParams, Link } from 'react-router-dom'
import './Project.css'

import gh from "../../assets/gh.png"
import ParticleEffectProject from './ParticleEffectProject'
import { Box, Grow } from '@mui/material'


export default function Project ({projects}) {

    const {chosenProject}  = useParams()
    const currentProject = projects.filter((project) => project.name === chosenProject)

    const {name, descr1, descr11, descr2, descr3Bold, descr3, descr4Bold, descr4, descr5Bold, descr5, link, linkDescr, github, link2, link2Descr, link3, link3Descr, link4, link4Descr, images} = currentProject[0]


    const [loadOne, setLoadOne] = useState(false)
    const [loadTwo, setLoadTwo] = useState(false)
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)

        setTimeout(() => setLoadOne(true) , 500);
        setTimeout(() => setLoadTwo(true) , 1000);
    }, [])

    useEffect(() => {
    let loadedImages = 0;

    function imageLoad() {
        loadedImages++;
        if (loadedImages === images.length) {
        setImagesLoaded(true);
        }
    };

    images.forEach((imageSrc) => {
        const currentImage = new Image();
        currentImage.src = imageSrc;
        currentImage.onload = imageLoad;
    });
    }, [images]);
    
    return (
        <>

            {/* <ParticleEffectProject /> */}

            <Box>
                <Grow in={loadOne}>
        
            <div className='project-page'>
                <div className='social-holder' style={{marginRight: "10px"}}>
                    
                        <Link to="/">
                            <button className='back-button'>                        
                                <p className='back-button-text' >{" < "}</p>
                            </button>                        
                        </Link>
                    
                </div> 

                

                
                <h3 style={{marginTop: "-20px"}}>{name}</h3>
                <div className='project-info'>
                    <p >{descr1}</p>
                    <p>{descr11}</p>
                </div>
                <div>
                    
                    
                {imagesLoaded ? (
                    <div className='image-holder'>
                        <Carousel 
                            // adaptiveHeight='true'
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
                    ) : (
                        <div>Loading...</div>
                    )}
                    </div>
                    </div>

                    </Grow>
                </Box>

                <Box>
                    <Grow in={loadTwo}>
                        <div>

                        
                                <div className='project-info'>
                                    <p>{descr2}</p>
                                </div>    
                                <div>
                                    {github === "" ? null : <a href={github} target="blank"><button className='project-links'>Find the repository on <img src={gh} style={{height: "18px"}}/></button></a>}
                                </div>
                                <div>
                                    {link === "" ? null : <a href={link} target="blank" ><button className='project-links'>{linkDescr}</button> </a>}
                                </div> 
                                <div>
                                    {link2 === "" ? null : <a href={link2} target="blank"><button className='project-links'>{link2Descr}</button> </a>}
                                </div>
                                <div>
                                    {link3 === "" ? null : <a href={link3} target="blank"><button className='project-links'>{link3Descr}</button> </a>}
                                </div>
                                    
                                    
                                
                        

                            <div className='project-info'>
                                {descr3 === "" ? null : <p><strong>{descr3Bold}</strong>{" " +descr3}</p>}
                                {descr4 === "" ? null : <p><strong>{descr4Bold}</strong>{" " +descr4}</p>}
                                {descr5 === "" ? null : <p><strong>{descr5Bold}</strong>{" " +descr5}</p>}
                                
                            </div>
                                {link4 === "" ? null : <a href={link4} target="blank"><button className='project-links'>{link4Descr}</button> </a>}
                                <div>
                                        <Link to="/">
                                            <button style={{width: "200px"}}>
                                                <p className='button-text'>Back</p>
                                            </button>   
                                        </Link>
                                </div>
                    </div>
                </Grow>
            </Box>    
                

            

                
        </>
    )
}