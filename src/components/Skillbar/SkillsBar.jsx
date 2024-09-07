import React from 'react'
import ProgressBar from '@ramonak/react-progress-bar'
import './Skillbar.css'
const SkillsBar = ({ name, percentage }) => {
    return (
        <div className='Skill-Bar'>
            <div className="Bar_title">
                <span>
                    {name}
                </span>
                <span>{percentage}%</span>
            </div>
            <ProgressBar
                completed={percentage}
                bgColor='#FC6736'
                height='0.5rem'
                width='100%'
                animateOnRender={true}
                isLabelVisible={false}
                margin='5px 0'
            />

        </div>
    )
}

export default SkillsBar
