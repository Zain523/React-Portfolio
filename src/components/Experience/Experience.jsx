import React from 'react'
import './experience.css'
import Fade from 'react-reveal/Fade';
import building from '../../assets/icons/building.svg'
import Skills from '../Skills/Skills';
// 
const Experience = () => {
    return (
        <>
            <section id='Experience'>
                <div className="Exp-title">
                    <h1>Experience</h1>
                    <p>“All our dreams can come true, if we have the courage to pursue them.”<br />
                        Walt Disney
                    </p>

                </div>

                <div className="exp-box">
                    <div className="center-line">
                        <span>
                            <img src={building} alt="" />
                        </span>
                        <span>
                            <img src={building} alt="" />
                        </span>

                    </div>
                    <Fade left duration={2000}>
                        <div className="box-1  box">
                            <div className="Exp-info">
                                <h3>Frontend Developer</h3>
                                <p>EBR Group - remote</p>
                                <p>Internship</p>
                                <p><strong>From :</strong> 21 Nov 2023</p>
                                <p><strong>To :</strong> Present</p>
                            </div>
                        </div>
                    </Fade>

                    <Fade right duration={2000}>
                        <div className="box-2 box">
                            <div className="Exp-info">
                                <h3>Frontend Developer</h3>
                                <p>Fiverr - remote</p>
                                <p>Freelance</p>
                                <p><strong>From :</strong> 23 Jan 2023</p>
                                <p><strong>To :</strong> 10 Oct 2023</p>
                            </div>
                        </div>
                    </Fade>

                </div>
            </section>

            <Skills />
        </>
    )
}

export default Experience
