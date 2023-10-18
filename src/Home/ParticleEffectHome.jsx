import { useState, useEffect } from 'react'
import { useCallback } from "react";
import React from 'react';
import Particles from "react-particles";


//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import { Box, Fade } from '@mui/material';

export default function ParticleEffectHome () {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);


    const [particles, setParticles] = useState(true)

    return (
        <>
            <Box>
                <Fade in={particles}>
                    <div style={{zIndex: '-40', position: 'fixed'}}>
                    <div style={{zIndex: '-40', position: 'fixed'}}>
                <Particles 
                            id="tsparticles"
                            init={particlesInit}
                            loaded={particlesLoaded}
                            options={{
                                fpsLimit: 120,
                                interactivity: {
                                    events: {
                                        onClick: {
                                            enable: false,
                                            mode: "push",
                                        },
                                        onHover: {
                                            enable: false,
                                            mode: "repulse",
                                        },
                                        resize: true,
                                    },
                                   
                                },
                                collisions: {
                                enable: false,
                                mode: 'bounce',
                            },
                                particles: {
                                color: {
                                    value: [
                                        "#FF49B3", //pink
                                        // "#FF0000", // Red
                                        "#0000FF", // Blue
                                        "#DADDDD", // Indigo
                                        "#8B00FF"  // Violet
                                    ]
                                },
                                    move: {
                                        direction: "top",
                                        enable: true,
                                        random: false,
                                        speed: 2,
                                        straight: false,
                                    },
                                    number: {
                                        value:30,
                                    },
                                    opacity: {
                                        value: {
                                          min: 0,
                                          max: 0.6, 
                                          anim: {
                                            enable: true,
                                            speed: 2, 
                                            opacity_min: 0,
                                            sync: false,
                                          },
                                        },
                                      },
                                    shape: {
                                        type: "circle"
                                    },
                                    size: {
                                        value: { min: 300, max: 300 },
                                    },
                                },
                                detectRetina: true,
                            }}
                        />
            </div>
                    </div>
                </Fade>
            </Box>
        </>
    )

}