import React from 'react'
import './footer.css'
import Button from '../UI Components/HireButton/Button'
import SocialAccounts from '../UI Components/SocialLinks/SocialAccounts'
function Footer() {
    const iconStyle = {
        backgroundColor: '#405469',
        padding: '0.5rem',
        borderRadius: '100%',
    }

    return (
        <footer>
            <div className="footer-wraper">
                <section className="left">
                    <h1>Do you want to make beautiful website?</h1>
                    <Button />
                    <p>
                        &copy; 2024 All right reserved. Zain Ul Abdin
                    </p>
                </section>
                <section className="right">
                    <p>I am extremely motivated to constantly develop my skills and grow professionally. I am confident in my abilities that I can smoothly push myself to any latest technology.</p>
                    <SocialAccounts customStyle={iconStyle} />
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
