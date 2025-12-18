import { Link } from 'react-router-dom';
import { servicesCards, projects } from '../data';
import cacLogo from '../assets/images/cac-logo.png';
import firsLogo from '../assets/images/firs-logo.png';
import efccLogo from '../assets/images/efcc-logo.jpg';
import shortClip from '../assets/images/construction-clip.mp4';
import SectionHeader from '../components/SectionHeader';
import '../assets/styles/home.css';


export default function Home() {
    return (
        <>
            <header className="hero__container">
                <div className="hero__overlay">
                    <div className="hero__content">
                        <h1>Innovative Solutions for a Better Tomorrow</h1>
                        <p>
                            Lintelz Engineering Limited is a construction company that focuses on 
                            real estate, design, and construction seeks to provide comprehensive 
                            solutions for both residential and commercial projects.
                        </p>
                        <div className="hero__buttons">
                            <button className="primary-btn">Get in touch</button>
                            <button className="primary-btn secondary-btn"><Link to="/about">Learn more</Link></button>
                        </div>
                    </div>
                    
                </div>
            </header>

            <section className="container about__container">
                <div className="about__content">
                    <SectionHeader title="About Us"/>

                    <div className="about__body">
                        <div className="about__left">
                            <video autoPlay loop muted src={shortClip}>
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        <div className="about__right">
                            <h1>
                                Trusted in construction and real estate industries
                            </h1>
                            <p>
                                We specialize in building 
                                strong, functional and innovative structures that focus on client 
                                satisfaction and industry excellence in order to deliver tailored 
                                solutions that meet the unique needs of our clients so as to bring 
                                their vision to life.
                            </p>
                            <button className="primary-btn secondary-btn"><Link to="/about">Learn more</Link></button>
                        </div>
                    </div>
                </div>
            </section>





            <section className="container services__container">
                <div className="services__content">
                    <SectionHeader title="Our Services"/>

                    <div className="services__body">
                        {servicesCards.map(({ id, icon, title, description}) => (
                            <div key={id} className="services__card">
                                <div className="services__icon">
                                    <img src={icon} alt={title} /> 
                                </div>
                                <h4>{title}</h4>
                                <small>{description}</small>
                            </div>
                        ))}
                    </div>
                </div>
            </section>




            <section className="container projects__container">
                <div className="project__content">
                    <SectionHeader title="Our Recent Projects" className="project__section-header"/>
                
                    <div className="project__body">
                        {projects.map(({ id, image, title, description, action }) => (
                            <div key={id} className="project__card">
                                <div className="project__image">
                                    <img src={image} alt={title} />
                                </div>

                                <h4>{title}</h4>

                                <small>{description}</small>

                                <button type="button" className='primary-btn'><Link to={action}>Read Project Description</Link></button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>




            <section className="container status__container">
                <div className="status__content">
                    <SectionHeader title="Our Legal Status" />

                    <div className="status__body">
                        <div>
                            <img src={cacLogo} alt='CAC Logo' />
                        </div>

                        <div>
                            <img src={firsLogo} alt='FIRS Logo' />
                        </div>

                        <div>
                            <img src={efccLogo} alt='EFCC Logo' />
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}