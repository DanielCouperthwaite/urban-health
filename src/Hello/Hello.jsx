import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './Hello.css'

export default function Hello () {

    const navigate = useNavigate();

    const [greetingOne, setGreetingOne] = useState(false)
    const [greetingTwo, setGreetingTwo] = useState(false)
    const [content, setContent] = useState(false)


    return (
        <>

        {useEffect(() => {
            setTimeout(() => setGreetingOne(true) , 1000);
            setTimeout(() => {
                setGreetingTwo(true)
                setGreetingOne(false) 
            }, 3000);
            setTimeout(() => {
                setGreetingTwo(false) 
            }, 7000);
            setTimeout(() => {
                setContent(true)
            }, 8000);
        }, [])}
        {greetingOne === false ? null : <p>Hello...</p>}
        {greetingTwo === false ? null: <p>Welcome to Me!</p>}
        {content === false ? null : navigate('/home')}
        
        </>
    )
}