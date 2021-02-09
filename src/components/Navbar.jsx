import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [active, setActive] = useState('About')
    useEffect(() => {
        const currentUrl = window.location.href
        if(currentUrl.endsWith('/')){
            setActive('About')
        }
        else if(currentUrl.endsWith('/resume')) {
            setActive('Resume')
        }
        else if(currentUrl.endsWith('/projects')) {
            setActive('Projects')
        }
    },[active])

    return (
        <div className="navbar">
            <div className="navbarActive">
                {active}
            </div>
            <div className="navbarItems">
                {
                    active !== 'About' ?
                        <Link to='/' className="navbarItem"onClick={() => setActive('About')}>
                            About
                        </Link> :
                        null
                }

                {
                    active !== 'Resume' ?
                        <Link to='/resume' className="navbarItem" onClick={() => setActive('Resume')}>
                           Resume
                        </Link>
                        :
                        null
                }

                {
                    active !== 'Projects' ?
                        <Link to="/projects" className="navbarItem" onClick={() => setActive('Projects')}>
                            Projects
                        </Link>:
                        null
                }
            </div>
        </div>
    )
}

export default Navbar
