import React from 'react'

const EducationCard = ({value : {curricullumName,passingYear,academyName}}) => {
    return (
        <div className="col-lg-4">
            <span><b>{curricullumName}</b></span>
            <br/>
            <span>{passingYear}</span>
            <br/>
            <span>{academyName}</span>
        </div>
    )
};

export default EducationCard;