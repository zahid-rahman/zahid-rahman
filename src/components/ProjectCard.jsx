import React from 'react'

const ProjectCard = ({value:{name,image,deployedLink,githubLink,category}}) => {
    return (
        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-12 mt-2">
            <div className="projectCardWrapper">
                <a href={deployedLink} target="_blank">
                    <img src={image} alt={name} className="projectCardImage" />
                </a>
                <div className="projectTitle">
                    <a href={githubLink}>
                        <i class="fab fa-github-square mr-2 mt-2 githubIcon"></i>
                    </a>
                    {name}
                </div>
            </div>
        </div>
    )
};

export default ProjectCard;
