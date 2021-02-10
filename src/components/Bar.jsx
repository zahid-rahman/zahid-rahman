import React from 'react'

const Bar = ({ value: { icon, title, level } }) => {

    const barWidth = `${level}%`

    return (
        <div className="bar">
            <div className="barWrapper" style={{
                'width': barWidth
            }}>
                <div className="barContent">
                    <i className={icon} id="icon"></i>
                    <span className="barName">
                        {title}
                    </span>
                </div>
            </div>
        </div>
    )
};

export default Bar;