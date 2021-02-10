import React, { useState } from 'react'
import projectData from '../json/projectDetails'
import ProjectCard from './ProjectCard';
import {motion} from 'framer-motion'

const Projects = () => {
    const [projects,setProjects] = useState(projectData)
    const [active,setActive] = useState(projectData)

    const filterCategoryAction = (category) => {
        const filteredProjectData = projectData.filter(project => project.category.includes(category))
        setProjects(filteredProjectData)
        setActive(category)
    }

    const projectDetailsCard = projects.map((projectDetails,index) => {
        return <ProjectCard key={index} value={projectDetails}></ProjectCard>
    })
    
    const projectVarient = {
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1,
            transition:{
                delay:0.2,duration:0.6,
            }
        },
        exit: {
            opacity:0,
            transition:{
                ease:'easeInOut'
            }
        }
    }

    return (
        <motion.div className="container projectContainer"
            variants={projectVarient}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <div className="projectNavbar"> 
                <div className={active === 'All' ? 'active':'normal'}onClick={() => {
                    setProjects(projectData);
                    setActive('All')
                }} >All</div>
                <div className={active === 'nodejs' ? 'active':'normal'}onClick={() => filterCategoryAction('nodejs')}>Node js</div>
                <div className={active === 'reactjs' ? 'active':'normal'}onClick={() => filterCategoryAction('reactjs')}>React</div>
                <div className={active === 'mern_stack' ? 'active':'normal'}onClick={() => filterCategoryAction('mern_stack')}>Mern stack</div>
                <div className={active === 'vanilla' ? 'active':'normal'}onClick={() => filterCategoryAction('vanilla')}>Vanilla</div>
                <div className={active === 'laravel' ? 'active':'normal'}onClick={() => filterCategoryAction('laravel')}>Laravel</div>
            </div>
            <div className="row">
                {projectDetailsCard}
            </div>
        </motion.div>
    )
};

export default Projects;