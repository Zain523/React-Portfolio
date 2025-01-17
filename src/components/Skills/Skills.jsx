import React from 'react'
import './skills.css'
import SkillsBar from '../Skillbar/SkillsBar'
import Fade from 'react-reveal/Fade';

const Skills = () => {
    return (
        <section className='Skill-Container' id='Skills'>
            <div className="Skill-title">
                <h1>Skills</h1>
                <p>I have hands on Experience in latest technologies that are used for website designing and development.</p>
            </div>
            <div className="My-Skills">
                <Fade up duration={2000} >
                    <div className="Frontend skill">
                        <h3 className='title'>Front End
                        </h3>
                        <SkillsBar name='HTML5' percentage={80} />
                        <SkillsBar name='CSS3/SASS' percentage={70} />
                        <SkillsBar name='TAILWIND CSS' percentage={60} />
                        <SkillsBar name='JAVASCRIPT' percentage={70} />
                        <SkillsBar name='REACT' percentage={60} />
                        <SkillsBar name='NEXT JS' percentage={60} />
                        <SkillsBar name='REACT NATIVE' percentage={60} />
                    </div>
                </Fade>
                <Fade up duration={2000}>
                    <div className="Backend skill">
                        <h3 className='title'>Back End</h3>
                        <SkillsBar name='NODE JS' percentage={50} />
                        <SkillsBar name='EXPRESS JS' percentage={70} />
                        <SkillsBar name='SQL' percentage={80} />
                        <SkillsBar name='MONGO DB' percentage={80} />
                        {/* <SkillsBar name='GRAPH QL' percentage={80} />
                        <SkillsBar name='WEB SOCKETS' percentage={80} /> */}
                    </div>
                </Fade>
                <Fade up duration={2000}>
                    <div className="Other-Languages skill">
                        <h3 className='title'>Tools/Languages</h3>
                        <SkillsBar name='JAVA' percentage={80} />
                        <SkillsBar name='C#' percentage={80} />
                        <SkillsBar name='PYTHON' percentage={60} />
                        <SkillsBar name='FIGMA' percentage={80} />
                        <SkillsBar name='GIT' percentage={90} />
                        <SkillsBar name='GITHUB' percentage={90} />
                        <SkillsBar name='JIRA' percentage={60} />
                    </div>
                </Fade>
            </div>
        </section >
    )
}

export default Skills
