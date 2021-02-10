import React, { useState } from 'react'
import projectData from '../json/projectDetails'
import ProjectCard from './ProjectCard';

const Projects = () => {
    const [projects,setProjects] = useState(projectData)

    const filterCategoryAction = (category) => {
        const filteredProjectData = projectData.filter(project => project.category.includes(category))
        setProjects(filteredProjectData)
    }

    const projectDetailsCard = projects.map((projectDetails,index) => {
        return <ProjectCard key={index} value={projectDetails}></ProjectCard>
    })
    
    return (
        <div className="container projectContainer">
            <div className="projectNavbar">
                <div onClick={() => setProjects(projectData)} >All</div>
                <div onClick={() => filterCategoryAction('nodejs')}>Node js</div>
                <div onClick={() => filterCategoryAction('reactjs')}>React</div>
                <div onClick={() => filterCategoryAction('mern_stack')}>Mern stack</div>
                <div onClick={() => filterCategoryAction('vanilla')}>Vanilla</div>
                <div onClick={() => filterCategoryAction('laravel')}>Laravel</div>
            </div>
            <div className="row">
                {projectDetailsCard}
            </div>
        </div>
    )
};

export default Projects;