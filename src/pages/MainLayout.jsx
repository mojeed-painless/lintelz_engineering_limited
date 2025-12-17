import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
import '../assets/styles/layout.css';
import { socialLinks, navLinks } from '../data.js';
import navLogo from '../assets/images/lintelz-logo2.png';
import painlessLogo from '../assets/images/pcalogo.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";

export default function MainLayout() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="nav__container">
                <div className="nav__logo">
                    <Link to="/"><img src={navLogo} alt="Lintelz Logo" /></Link>
                </div>

                <ul className={`nav__links ${isMenuOpen ? 'active' : ''}`}>
                    {navLinks.map(({ id, name, href }) => (
                        <li key={id}><Link to={href} onClick={() => setIsMenuOpen(false)}>{name}</Link></li>
                    ))}
                </ul>

                <div className="nav__socials">
                    {socialLinks.map(({ id, href, icon: Icon }) => (
                      <a key={id} href={href} target="_blank" rel="noopener noreferrer">
                        <Icon className="nav__social-icon" />
                      </a>
                    ))}
                </div>

                <div className="nav__menu-btn">
                    <button type="button" onClick={() => setIsMenuOpen(mo => !mo)}>{isMenuOpen ? <CgClose /> : <RxHamburgerMenu />}</button>
                </div>
            </nav>

            {isMenuOpen && <div className="nav__overlay" onClick={() => setIsMenuOpen(false)}></div>}

            <main className="main__content">
                <Outlet />
            </main>

            <footer className="footer__container">
                <div className="footer__top">
                    <div className="footer__left">
                        <div className="footer__logo">
                            <Link to="/"><img src={navLogo} alt="Lintelz Logo" /></Link>
                        </div>

                        <ul className="footer__links">
                            {navLinks.map(({ id, name, href }) => (
                                <li key={id}><Link to={href}>{name}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer__map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.296045261278!2d3.28574404299271!3d6.588876658872111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9037da042223%3A0xe4a9eb03de7f1819!2s19%20Lanre%20Towobola%20Cl%2C%20Isheri%20Olofin%2C%20Lagos%20102213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1765982884559!5m2!1sen!2sng"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Lintelz Engineering Limited Location"
                        ></iframe>
                    </div>
                    
                    <div className="footer__right">
                        <h3>Contact Us</h3>

                        <div className="footer__contacts">
                            <p><small>Email:</small> lintezengltd@gmail.com</p>
                            <p><small>Phone:</small> +2347036814897, +2348182225750</p>
                        </div>

                        <div className="footer__address">
                            <p><small>Contact Office:</small> 19, Lanre Towobola Close off Awori Street, Egbeda, Lagos.</p>
                            <p><small>Branch Office:</small> 11, Ola-Ayeni Street, off Medical Road, Ikeja, Lagos.</p>
                        </div>

                        <div className="footer__socials nav__socials">
                            {socialLinks.map(({ id, href, icon: Icon }) => (
                                <a key={id} href={href} target="_blank" rel="noopener noreferrer">
                                    <Icon className="footer__social-icon" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>&copy; {new Date().getFullYear()} Lintelz Engineering Limited.</p>
                    <div className="painless-logo">
                        <a href="https://wa.me/2349124323167" target="_blank" rel="noopener noreferrer">
                        Powered by: <img src={painlessLogo} alt="Painless Logo" />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}
