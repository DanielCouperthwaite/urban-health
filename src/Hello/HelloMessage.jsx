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
            <Grow in={greetingOne}><p style={{color: "white", margin: "auto", setTimeout: 2000}}>Hello</p></Grow>
            {/* {greetingOne === false ? null : <p style={{color: "white", margin: "auto"}}>Hello...</p>} */}
        </Box><Box>
            <Grow in={greetingTwo}><p style={{color: "white", margin: "auto"}}>Welcome to Me</p></Grow>
            {/* {greetingTwo === false ? null: <p style={{color: "white"}}>Welcome to Me!</p>} */}
        </Box>
        </div>
        </>
    )
}