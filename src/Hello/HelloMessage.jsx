import { useState, useEffect } from 'react'
import "./Hello.css"

import { Box, Fade, Zoom, Grow } from '@mui/material'

export default function HelloMessage () {

    const [greetingOne, setGreetingOne] = useState(false)
    const [greetingTwo, setGreetingTwo] = useState(false)


    useEffect(() => {
                setTimeout(() => setGreetingOne(true) , 1000);
                setTimeout(() => {
                    setGreetingOne(false) 
                }, 2500);
                setTimeout(() => {
                    setGreetingTwo(true) 
                }, 3000);
                setTimeout(() => {
                    setGreetingTwo(false) 
                }, 4500);

            }, [])


    return (
        <>

        
        <div>
        <Box>
            <Grow in={greetingOne}><h3 style={{color: "white", margin: "auto", setTimeout: 2000}}>Hello</h3></Grow>
        </Box><Box>
            <Grow in={greetingTwo}><h3 style={{color: "white", margin: "auto"}}>Welcome to Me</h3></Grow>
        </Box>
        </div>
        </>
    )
}