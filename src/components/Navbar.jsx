import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import {animate, motion} from 'framer-motion'

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

    const navbarVarient = {
        hidden:{
            y:'-30vh',
            opacity:0
        },
        visible:{
            y:0,
            opacity:1,
            transition:{
                delay:0.2,duration:0.7,type:'spring'
            }
        }
    }

    return (
        <motion.div className="navbar"
            variants={navbarVarient}
            initial='hidden'
            animate="visible"
        >
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
        </motion.div>
    )
}

export default Navbar
