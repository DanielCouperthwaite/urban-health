import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './Hello.css'
import ParticleEffect from './ParticleEffect';
import HelloMessage from './HelloMessage';

export default function Hello () {

    const navigate = useNavigate();
    
    {useEffect(() => {
            setTimeout(() => {
                navigate('/home')
            }, 7000);
        }, [])}

    return (
        <>

        
        
        <ParticleEffect />
        <HelloMessage />
        
        </>
    )
}