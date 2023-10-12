import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home () {

    return (
        <>
            <body>
                   
                <div>
                    <div>
                        <Link className="link" to="/about"><button>About</button>   </Link>
                    </div>

                    <div>
                        <Link className="link" to="/tech"><button>Tech Skills</button>   </Link>
                    </div>

                    <div>
                        <Link className="link" to="/project"><button>Project</button>   </Link>
                    </div>
                </div>
                
            </body>
        </>
    )
}