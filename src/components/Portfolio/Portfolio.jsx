import React from 'react'
import './Portfolio.css'
import calculator from '../../assets/icons/calculator.png'
import todo from '../../assets/icons/todo.png'
import clock from '../../assets/icons/clock.png'
import weather from '../../assets/icons/weather app.png'
import Fade from 'react-reveal/Fade';

const Portfolio = () => {
    return (
        <section id="Portfolio">
            <div className="Portfolio-title">
                <h1>Portfolio</h1>
            </div>
            <div className="Projects-section">
                <Fade duration={2000}>
                    <figure>
                        <img src={calculator} alt="Calculator" />
                        <figcaption>
                            <a href="https://soft-pony-8588ad.netlify.app/" rel="noreferrer" target="_blank"><i className="fa-solid fa-link"></i></a>
                            {/* <a href="/*"><i className="fa-sharp fa-regular fa-eye"></i></a> */}
                        </figcaption>
                    </figure>
                </Fade>
                <Fade duration={2000}>
                    <figure>
                        <img src={todo} alt="Todo" />
                        <figcaption>
                            <a href="https://fluffy-moxie-11cce3.netlify.app/" target='_blank' rel="noreferrer"><i className="fa-solid fa-link"></i></a>
                            {/* <a href="/*"><i className="fa-sharp fa-regular fa-eye"></i></a> */}
                        </figcaption>
                    </figure>
                </Fade>
                <Fade duration={2000}>
                    <figure>
                        <img src={clock} alt="Clock" />
                        <figcaption>
                            <a href="https://splendorous-gnome-742b86.netlify.app/" target='_blank' rel="noreferrer"><i className="fa-solid fa-link"></i></a>
                            {/* <a href="/*"><i className="fa-sharp fa-regular fa-eye"></i></a> */}
                        </figcaption>
                    </figure>
                </Fade>
                <Fade duration={2000}>
                    <figure>
                        <img src={weather} alt="weather forecast" />
                        <figcaption>
                            <a href="https://amazing-bavarois-79195c.netlify.app/" target='_blank' rel="noreferrer"><i className="fa-solid fa-link"></i></a>
                            {/* <a href="/*"><i className="fa-sharp fa-regular fa-eye"></i></a> */}
                        </figcaption>
                    </figure>
                </Fade>
                
            </div>
        </section >
    )
}

export default Portfolio
