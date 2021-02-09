import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [active, setActive] = useState('About')

    return (
        <div className="navbar">
            <div className="navbarActive">
                {active}
            </div>
            <div className="navbarItems">
                {
                    active !== 'About' ?
                        <Link to='/'>
                            <div className="navbarItem" onClick={() => setActive('About')}>About</div>
                        </Link> :
                        null
                }

                {
                    active !== 'Resume' ?
                        <Link to='/resume'>
                            <div className="navbarItem" onClick={() => setActive('Resume')}>Resume</div>
                        </Link>
                        :
                        null
                }

                {
                    active !== 'Projects' ?
                        <Link to="/projects">
                            <div className="navbarItem" onClick={() => setActive('Projects')}>Projects</div>
                        </Link>:
                        null
                }
            </div>
        </div>
    )
}

export default Navbar
