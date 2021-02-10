import React from 'react'
import experienceData from '../../json/experience.json'
import ExperienceCards from '../ExperienceCards';
import { motion } from 'framer-motion';
import './about.css'
const About = () => {

    const experienceCards = experienceData.map((workExperiences,index) => {
        return <ExperienceCards key={index} experience={workExperiences}></ExperienceCards>
    })

    const aboutVarient = {
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
       <motion.div className="about"
        variants={aboutVarient}
        initial='hidden'
        animate='visible'
        exit="exit"
       >
           <h6 className="aboutIntro">
           Experienced Full Stack Web Developer with a demonstrated history of working in the internet industry. Skilled in RESTful webservices, Javascript,Nodejs,MERN stack development,MySQL,MongoDB,PHP, Java, Android Development.Strong engineering professional graduated from B.SC in Software engineering at American International university Bangladesh. 
           </h6>
            <div className="container-fluid aboutContainer">
                <h4 className="aboutHeading">Working experience</h4>
                <div className="row">
                    {experienceCards}
                </div>
            </div>


       </motion.div>
    )
};

export default About;