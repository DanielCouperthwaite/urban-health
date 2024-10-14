import { useState, useEffect } from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
import { Box, Grow } from '@mui/material'

import face from "../../assets/face.png"
import ParticleEffectAbout from '../About/ParticleEffectAbout'

import fb from "../../assets/facebook-logo.png"
import ig from "../../assets/instagram-logo.png"
import tw from "../../assets/twitter-logo.png"


export default function Contact () {

    const [loadOne, setLoadOne] =useState(false)
    const [loadTwo, setLoadTwo] =useState(false)

    const [submitted, setSubmitted] = useState(false);  
    const [validated, setValidated] = useState(false);

    function Form() {

        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [message, setMessage] = useState('');
        
        function handleSubmit(event) {
            event.preventDefault();

            if( name.length > 0
                && message.length > 0
                && email.length > 0
                && email.split('').includes('@')
                && email.split('').includes('.')){
                    setValidated(true)
                } else setValidated(false)
            
                
            setSubmitted(true);
            
            if(validated === true){
            
            fetch("https://formsubmit.co/ajax/danielcoup1@outlook.com", {
            // fetch("https://formsubmit.co/ajax/urbanhealthuk@hotmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    message: message,
                    email: email

                })
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .then(() => {
                    setEmail("")
                    setMessage("")
                    setName("")
                    setSubmitted(false)
                })
                .then(() => {
                    alert("Message Sent!")
                })
                .catch((error) => alert("Unfortunately, there was a problem with your submission. Please try again!"));
        }

        }


        return (
            <>
                <form
                    name="contact"
                    onSubmit={handleSubmit}
                >
                    
                    <div>
                        <label htmlFor="name">Name*</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}

                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="email">
                            Email*</label>

                            <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}

                            onChange={(event) => setEmail(event.target.value)}
                        />

                    </div>
                    <div>
                        <label htmlFor="message">
                            Message*</label>
                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                        />

                    </div>
                    {validated === false && submitted === true ? <p style={{color: "red", textAlign: "center"}}>Please fill in all fields</p> : null}
                    <button className='submit' type="submit">Submit</button>
                </form>
            </>
        )
    }

    


    useEffect(() => {

            window.scrollTo(0, 0)

            setTimeout(() => setLoadOne(true) , 500);
            setTimeout(() => setLoadTwo(true) , 1000);
           
        }, [])

    return (
        <>

            {/* <ParticleEffectAbout /> */}

            <Box>
                <Grow in={loadOne}>
                    <div className="about">
                    
                        <div className='social-holder-contact' style={{ marginRight: "10px" }}>
                            <Link to="/">
                                <button className='back-button'>
                                    <p className='back-button-text' >{" < "}</p>
                                </button>
                            </Link>
                        </div>  
                    
                        
                        <h3 style={{marginTop: "-20px"}}>Get in Touch!</h3>
                        <p>Follow us on social media, or fill in a form and we will get back to you as soon as possible!</p>

                        <div className='social-contact'>
                                            <a  href="https://www.facebook.com/share/JNqew8PHdicTvR1N/?mibextid=LQQJ4d" target='_blank'>
                                                <button className="social-link">
                                                    <img src={fb} alt="Facebook logo" style={{width: "80%", height: "auto"}}></img>
                                                </button>
                                            </a>
                                            <a href="https://www.instagram.com/urbanhealthuk2024?igsh=MWN2MGVtcTFvdW01MQ%3D%3D&utm_source=qr" target='_blank'>
                                                <button className="social-link">
                                                    <img src={ig} alt="Instagram Logo" style={{width: "80%", height: "auto"}}></img>
                                                </button>
                                            </a>
                                            <a href="https://twitter.com/UrbanHealthUK24" target='_blank'>
                                                <button className="social-link">
                                                    <img src={tw} alt="Twitter Logo" style={{width: "80%", height: "auto"}}></img>
                                                </button>
                                            </a>
                                        </div>  


                    </div>
                    </Grow>    
                    <Grow in={loadTwo}>
                    <div className="about">


                    {/* {submitted === false || validated === false ?  */}
                        <Form /> 
                        {/* : <div className='submitted'><p>Thanks for getting in touch!<br /><br /> We will reply as soon as we can.</p></div>} */}


                        
                        <div>
                            <div style={{textAlign: "center"}}>
                                        <Link to="/">
                                            <button style={{width: "200px"}}>
                                                <p className='button-text'>Back</p>
                                            </button>   
                                        </Link>
                            </div>
                        </div>
                    
                    
                    </div>
                </Grow> 
            </Box>    
        </>
    )
}