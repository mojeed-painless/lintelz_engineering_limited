import { Link } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';
import PageHeader from "../components/PageHeader";
import '../assets/styles/contact.css'
import contactImage from '../assets/images/contact-image.png';
import { FaCheckCircle } from "react-icons/fa";
import { VscSmiley } from "react-icons/vsc";

export default function Contact() {

    const [state, handleSubmit] = useForm("maqwdgpv");
        
    if (state.succeeded) {
        return (
            <section className="container form-status__container">
                <div className="form-status__content">
                    <span className='form-status__smiley'><VscSmiley /></span>

                    <div>
                        <span><FaCheckCircle /></span>
                        <p>Form Submitted Successfully</p>
                    </div>

                    <Link to="/" className='primary-btn secondary-btn'>Keep Browsing our Website</Link>
                </div>
            </section>
        );
    }

    return (
        <>
            <PageHeader 
                title="Contact Us" 
                subtitle="Get in touch with us for inquiries, support, or feedback."
                className="contact__page-header" 
            />

            <section className="container contact__container">
                <div className="contact__content">
                    <div className="contact__left">
                        <img src={contactImage} alt="Contact Image" />
                    </div>

                    <div className="contact__right">
                        <h2>We are Here to Help and Ready to Hear from You</h2>
                        <form action="https://formspree.io/f/maqwdgpv" method="POST" onSubmit={handleSubmit}>
                            <div className="contact__right-input">
                                <label htmlFor="name">Name:</label>
                                <input type="text" name="name" id="name" placeholder="Your Name" required/>
                            </div>
                            <ValidationError 
                                prefix="Name" 
                                field="name"
                                errors={state.errors}
                            />

                            <div className="contact__right-input">
                                <label htmlFor="email">Email:</label>
                                <input type="email" name="email" id="email" placeholder="Your Email" required/>
                            </div>
                            <ValidationError 
                                prefix="Email" 
                                field="email"
                                errors={state.errors}
                            />

                            <div className="contact__right-input">
                                <label htmlFor="subject">Subject:</label>
                                <input type="text" name="subject" id="subject" placeholder="Subject"/>
                            </div>
                            <ValidationError 
                                prefix="Subject" 
                                field="subject"
                                errors={state.errors}
                            />

                            <div className="contact__right-input">
                                <label htmlFor="message">Message:</label>
                                <textarea name="message" id="message" rows={5} placeholder="Drop you Message" required></textarea>                 
                            </div>
                            <ValidationError 
                                prefix="Message" 
                                field="message"
                                errors={state.errors}
                            />

                            <button type="submit" className="primary-btn" disabled={state.submitting}>Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}