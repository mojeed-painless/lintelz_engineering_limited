import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from "../components/PageHeader";
import SectionHeader from "../components/SectionHeader";
import AboutSection from "../components/AboutSection";
import { aboutMenu, team } from '../data';
import { GoGoal } from "react-icons/go";
import { FaBookReader, FaCrosshairs } from "react-icons/fa";
import { FaPersonBooth } from "react-icons/fa6";
import { BsCompass } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import { IoDownloadOutline } from "react-icons/io5";

import '../assets/styles/about.css'

export default function About() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <PageHeader 
                title="About Us" 
                subtitle="Learn more about our company Goal and Strategy"
                className="about__page-header" 
            >
                <button type="button" className='primary-btn'><span><IoDownloadOutline /></span> Download Company Profile</button>
                <button type="button" onClick={() => setIsMenuOpen(mo => !mo)}>{isMenuOpen ? <CgClose /> : <RxHamburgerMenu />}</button>
            </PageHeader>

            <div className={`about__menu ${isMenuOpen ? "active-about__menu" : ''}`}>
                <button type="button" onClick={() => setIsMenuOpen(mo => !mo)}>{isMenuOpen ? <CgClose /> : <RxHamburgerMenu />}</button>

                <div className="about__menu-item">
                   {aboutMenu.map(({ id, Icon, title, to }) => (
                        <a href={to} key={id}>
                            <span><Icon /></span>
                            <small>{title}</small>
                        </a>
                    ))} 
                </div>
            </div>


            <div className="about__container">
            <AboutSection icon={FaBookReader} >
                <p>
                    <b>LINTELZ ENGINEERING LIMITED</b> is a trusted name in construction and real estate industries in Nigeria. Registered with the cooperate affairs commission under <b><i>Registration No.</i> 8187450</b>, we specialize in building strong, functional and innovative structures that focus on client satisfaction and industry excellence in order to deliver tailored solutions that meet the unique needs of our clients so as to bring their vision to life.
                </p>

                <p>
                    We are committed to transforming spaces and creating exceptional environments that combine functionality, aesthetics, and sustainability. Whether it's residential, commercial, or mixed-use developments, our team ensures seamless execution from concept development to detailed plans to ensure every project is both visually stunning and highly functional which in turn build trusts and long lasting relationships.
                </p>
            </AboutSection>


            <AboutSection id="goal" title="Our Goals" icon={GoGoal} >
                <p>
                    A construction company that focuses on real estate, design, and construction seeks to provide comprehensive solutions for both residential and commercial projects. <b>The primary goal is to create high-quality, innovative structures that meet the diverse needs of clients while adhering to the principles of sustainability.</b>
                </p>

                <p>
                    By integrating design and construction expertise, the company aims to offer a seamless experience from the initial concept phase to project completion.
                </p>

                <p>
                    This approach not only ensures that the projects are built to the highest standards but also guarantees that the client’s vision is effectively realized.
                </p>

                <p>
                    The company’s commitment to excellence is reflected in its attention to detail, <b>dedication to meeting deadlines</b>, and its ability to deliver projects within budget, all while fostering long-term relationships with clients and stakeholders in the real estate industry.
                </p>
            </AboutSection>


            <AboutSection id="principle" title="Cooperate Principle" icon={FaCrosshairs} >
                <p>
                    At LINTELZ ENGINEERING LIMITED, we embrace innovative design concepts, modern technology, and construction methods to stay ahead in a competitive market while we also Maintain transparency and honesty in all dealings with clients, stakeholders, and regulatory bodies through clear communications before and project execution to adhering to budgets and timelines.
                </p>

                <p>
                    By doing so, the company hopes to establish itself as a trusted leader in the real estate and construction sectors, known for its ability to adapt to evolving market demands and strong ethical values.
                </p>
            </AboutSection>


            <AboutSection id="approach" title="Our Approach" icon={FaPersonBooth} >
                <p>
                    At LINTELZ ENGINEERING LIMITED, our approach is centered on innovation, collaboration, and excellence. We integrate real estate expertise, creative design, and reliable construction to deliver end-to-end solutions tailored to our clients' needs.
                </p>

                <p>
                    We also identify opportunities that maximize value through strategic planning and market insights. Our design process emphasizes functionality, aesthetics, and sustainability, creating spaces that inspire and endure. With construction, we prioritize quality, safety, and efficiency, ensuring every project is executed on time and to the highest standards.
                </p>

                <p>
                    Our client-focused approach ensures seamless execution, delivering exceptional results that exceed expectations.
                </p>
            </AboutSection>


            <AboutSection id="strategy" title="Our Strategy" icon={BsCompass} >
                <p>
                    At LINTELZ ENGINEERING LIMITED, <b>our strategy combines innovation, sustainability, and client-centered excellence to deliver exceptional results in real estate, design, and construction.</b>
                </p>

                <p>
                    In real estate, we focus on strategic property acquisition, development, and management, leveraging market insights to create long-term value. Our design strategy emphasizes creativity, functionality, and sustainability, ensuring spaces are both aesthetically pleasing and practical.
                </p>

                <p>
                    In construction, we prioritize quality, efficiency, and eco-friendly practices, employing advanced technologies and skilled expertise to deliver projects on time and within budget.
                </p>

                <p>
                    Together, these pillars ensure we meet client needs while shaping sustainable and inspiring environments.
                </p>
            </AboutSection>
            </div>




            <section className="container team__container" id="team">
                <div className="team__content">
                    <SectionHeader title="Meet Our Team" className="team__section-header"/>
                
                    <div className="team__body">
                        {team.map(({ id, image, name, portfolio }) => (
                            <div key={id} className="team__card">
                                <div className="team__card-image">
                                    <img src={image} alt={name} />
                                </div>

                                <div className="team__card-text">
                                    <h5>{name}</h5>
                                    <small>{portfolio}</small>
                                </div>

                                <button type="button" className="primary-btn">Read Profile</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            
        </>
    )
}