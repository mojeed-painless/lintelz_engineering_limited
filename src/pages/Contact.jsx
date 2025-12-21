import PageHeader from "../components/PageHeader";
import '../assets/styles/contact.css'
import contactImage from '../assets/images/contact-image.png';

export default function Contact() {
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
                        <form action="">
                            <div className="contact__right-input">
                                <label htmlFor="name">Name:</label>
                                <input type="text" name="name" id="name" />
                            </div>

                            <div className="contact__right-input">
                                <label htmlFor="email">Email:</label>
                                <input type="email" name="email" id="email" />
                            </div>

                            <div className="contact__right-input">
                                <label htmlFor="subject">Subject:</label>
                                <input type="text" name="subject" id="subject" />
                            </div>

                            <div className="contact__right-input">
                                <label htmlFor="message">Message:</label>
                                <textarea name="message" id="message" rows={5}></textarea>                 
                            </div>

                            <button type="submit" className="primary-btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}