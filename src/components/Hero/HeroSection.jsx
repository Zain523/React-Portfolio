import Typed from 'typed.js';
import React, { useEffect } from 'react'
import './Herosection.css'
import dashboard from '../../assets/icons/dashboard.png'
import Fade from 'react-reveal/Fade';
import Button from '../UI Components/HireButton/Button';
import SocialAccounts from '../UI Components/SocialLinks/SocialAccounts';

const HeroSection = () => {

    useEffect(() => {
        const typed = new Typed('.auto-type', {
            strings: ['Software Engineer', 'MERN Developer', 'Coding Enthusiastic', 'React Native Developer'],
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
                    <Fade left duration={2000} >
                        <h3>Welcome!</h3>
                    </Fade>
                    <Fade up duration={1000}>
                        <h1>I'm Zain Ul Abdin</h1>
                    </Fade>
                    <h1>
                        <span className="auto-type"> </span>
                    </h1>
                </div>
                <Fade up duration={2000}>
                    <div className='links'>
                        <Button />
                        <a href="#Portfolio">See Portfolio</a>
                    </div>
                </Fade>
                <Fade right duration={2000}>
                    <div className='intro'>
                        <img src={dashboard} alt="" />
                        <p>I am extremely motivated to constantly develop my skills and grow professionally. I am confident in my abilities that I can smoothly push myself to any latest technology.</p>
                    </div>
                </Fade>
                <SocialAccounts />
            </div>
            <h1>Image place</h1>
            {/* <div className="hero-img">
            </div> */}
        </section>
    )
}

export default HeroSection
