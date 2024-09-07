import Typed from 'typed.js';
import React, { useEffect } from 'react'
import './Herosection.css'
import dashboard from '../../assets/icons/dashboard.png'
const HeroSection = () => {

    useEffect(() => {
        const typed = new Typed('.auto-type', {
            strings: ['Software Engineer', 'React Js Developer', 'Coding Enthusiastic'],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section id='About'>
            <div className="profile-container">
                <div className='hero-name'>
                    <h5>Welcome!</h5>
                    <h1>I'm Zain Ul Abdin</h1>
                    <h1>
                        <span className="auto-type"> </span>
                    </h1>
                </div>
                <div className='links'>
                    <button className='hire-btn'>
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>Hire Me
                    </button>
                    <a href="#Portfolio">See Portfolio</a>
                </div>
                <div className='intro'>
                    <img src={dashboard} alt="" />
                    <p>I am extremely motivated to constantly develop my skills and grow professionally. I am confident in my abilities that I can smoothly push myself to any latest technology.</p>
                </div>
                <div className='social'>
                    <span>
                        Follow Me:
                    </span>
                    <ul className='accounts'>
                        <i className="fab fa-github" aria-hidden='true'></i>
                        <i className="fab fa-facebook" aria-hidden='true'></i>
                        <i className="fab fa-linkedin" aria-hidden='true'></i>
                        <i className="fab fa-twitter" aria-hidden='true'></i>
                    </ul>
                </div>
            </div>
            <h1>Image place</h1>
            {/* <div className="hero-img">
            </div> */}
        </section>
    )
}

export default HeroSection
