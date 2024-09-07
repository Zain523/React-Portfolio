import React from 'react'
import './footer.css'
function Footer() {
    return (
        <footer>
            <div className="footer-wraper">
                <section className="left">
                    <h1>Do you want to make beautiful website?</h1>
                    <button className='hire-btn'>
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>Hire Me
                    </button>
                    <p>
                        &copy; 2024 All right reserved. Zain Ul Abdin
                    </p>
                </section>
                <section className="right">
                    <p>I am extremely motivated to constantly develop my skills and grow professionally. I am confident in my abilities that I can smoothly push myself to any latest technology.</p>
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
                    <ul className="nav-item">
                        <li><a href="#About" >About</a></li>
                        <li><a href="#Experience" >Experience</a></li>
                        <li><a href="#Portfolio">Portfolio</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                </section>
            </div>
        </footer>
    )
}

export default Footer
