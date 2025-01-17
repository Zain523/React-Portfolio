import React, { useState } from 'react'
import './contact.css'
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from 'emailjs-com';
import BeatLoader from "react-spinners/BeatLoader";

function Contact() {
    const SITE_KEY = process.env.REACT_APP_SITE_KEY
    const TEMPLATE_KEY = process.env.REACT_APP_EMAIL_TEMPLATE_KEY
    const PUBLIC_KEY = process.env.REACT_APP_EMAIL_PUBLIC_KEY
    const SERVICE_KEY = process.env.REACT_APP_EMAIL_SERVICE_KEY

    const [receipent, setReceipent] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [loading, setLoading] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target
        setReceipent(receipent => ({
            ...receipent,
            [name]: value
        })
        )
    }
    const handleSendEmail =async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const res = await emailjs.send(SERVICE_KEY, TEMPLATE_KEY, receipent, PUBLIC_KEY)
            alert('Email sent successfully!', res.text);
        } catch (error) {
            console.log('Error in sending email', error);
        }
        finally {
            setLoading(false)
        }

    }

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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13273.90126176175!2d73.02173660044768!3d33.722523219755814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbef8bdb4aab9%3A0xd1c5702b2e0b9451!2sE-8%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1725737174332!5m2!1sen!2s" width="100%" height="100%" style={{ "border": "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="contact-form">
                    <form onSubmit={handleSendEmail}>
                        <input type="text"
                            required
                            name='name'
                            onChange={handleChange}
                            value={receipent.name}
                            placeholder='Enter your name' />

                        <input
                            type="text"
                            required
                            name='email'
                            onChange={handleChange}
                            value={receipent.email}
                            placeholder='Enter your email' />

                        <textarea
                            name='message'
                            required
                            onChange={handleChange}
                            value={receipent.message}
                            placeholder='Message' />

                        <div className="recaptcha-wraper">
                            <ReCAPTCHA
                                sitekey={SITE_KEY}
                                onChange={onChange}
                            />
                        </div>

                        <button className={`btn ${!loading ? 'btn-enabled' : null}`} disabled={loading} type='submit'>
                            {
                                !loading ? 'Send Email' :
                                    <BeatLoader
                                        color={'#ffff'}
                                        loading={loading}
                                        size={10}
                                        aria-label="Loading Spinner"
                                        data-testid="loader"
                                    />
                            }

                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
