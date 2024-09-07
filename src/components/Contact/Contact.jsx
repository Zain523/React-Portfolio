import React from 'react'
import './contact.css'
import ReCAPTCHA from "react-google-recaptcha";


function Contact() {
    function onChange(value) {
        console.log("Captcha value:", value);
    }
    return (
        <section id='Contact'>
            <div className="Contact-title">
                <h1>Get in touch</h1>
            </div>

            <div className="wraper">
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13273.90126176175!2d73.02173660044768!3d33.722523219755814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbef8bdb4aab9%3A0xd1c5702b2e0b9451!2sE-8%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1725737174332!5m2!1sen!2s" width="100%" height="100%" style={{ "border": "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="contact-form">
                    <form action="">
                        <input type="text" placeholder='Enter your name' />
                        <input type="text" placeholder='Enter your email' />
                        <textarea placeholder='Message' />
                        <div className="recaptcha-wraper">
                        <ReCAPTCHA
                            sitekey="6LfMozkqAAAAALkffYSCzHWg2yMA641nEYdZblET"
                            onChange={onChange}
                        />
                        </div>
                       
                        <button type='submit'>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
