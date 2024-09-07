import React from 'react'
import './header.css'
import { useState, useEffect } from 'react';

const Header = () => {

    const [iconStyle, setIconStyle] = useState("fa fa-paper-plane");
    const [text, setText] = useState();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 576) {

                setIconStyle('fa fa-envelope');
                setText('');
            }
            else {

                setIconStyle('fa fa-paper-plane');
                setText("Let's Talk");
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    return (
        <div id='#Header' className='header'>
            <div className="image">
                <span>Z</span>
                <ul className='hero-name'>
                    <li>Zain Ul Abdin</li>
                    <li>Software Engineer</li>
                </ul>
            </div>

            <ul className="nav-item">
                <li><a href="#About" >About</a></li>
                <li><a href="#Experience" >Experience</a></li>
                <li><a href="#Portfolio">Portfolio</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>

            <button className='send-btn'>
                <i className={iconStyle} aria-hidden="true"></i>
                &nbsp; {text}
            </button>
        </div>
    )
}

export default Header
