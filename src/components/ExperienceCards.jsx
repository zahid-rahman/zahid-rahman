import React from 'react'
import { Link } from 'react-router-dom';

const ExperienceCards = ({ experience: { companyName, position, timeline,companyImage } }) => {
    return (
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
            <div className="cardData">
                <ul className="experienceDataList">
                    <li>
                        <span><b>{companyName}</b></span>
                    </li>
                    <li>
                        <span>{position}</span>
                    </li>
                    <li>
                        <span>{timeline}</span>
                    </li>
                </ul>

            </div>
        </div>
    )
};

export default ExperienceCards;