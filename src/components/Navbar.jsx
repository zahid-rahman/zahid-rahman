import React,{useState} from 'react'

const Navbar = () => {

    const [active,setActive] = useState('About')

    return (
        <div className="navbar">
            <div className="navbarActive">
                {active}
            </div>
            <div className="navbarItems">
                {
                    active !== 'About' ? 
                    <div className="navbarItem" onClick={() => setActive('About')}>About</div>:
                    null
                }

                {
                    active !== 'Resume' ? 
                    <div className="navbarItem" onClick={() => setActive('Resume')}>Resume</div>:
                    null
                }

                {
                    active !== 'Projects' ? 
                    <div className="navbarItem" onClick={() => setActive('Projects')}>Projects</div>:
                    null
                }
            
                
            </div>
        </div>
    )
}

export default Navbar
