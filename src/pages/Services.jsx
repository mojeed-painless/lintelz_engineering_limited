import PageHeader from "../components/PageHeader";
import ServiceSection from "../components/ServiceSection";
import { servicesLists } from '../data';
import '../assets/styles/service.css';

export default function Services() {


    return (
        <>
            <PageHeader 
                title="Our Services" 
                subtitle="Discover the range of services we offer to meet your needs."
                className="services__page-header" 
            />

            <section className="services-hero">
                <div className="hero-overlay" />

                <div className="hero-content">
                <span className="eyebrow">
                    WHAT WE DO <span />
                </span>

                <h1>
                    Building Ideas.
                    <br />
                    <span>Creating Possibilities.</span>
                </h1>

                <p>
                    We deliver innovative engineering, architectural and
                    construction solutions that turn your vision into reality.
                </p>

                <a href="#our-services" className="hero-button">
                    Explore Our Services <span>↓</span>
                </a>
                </div>

                <div className="hero-bottom">
                <span>ENGINEERING EXCELLENCE</span>
                <span>DESIGNING THE FUTURE — 01 / 04</span>
                </div>
            </section>

            <section className="services-intro" id="our-services">
                <div>
                <span className="eyebrow dark">
                    OUR EXPERTISE <span />
                </span>
                <h2>
                    Solutions built around
                    <br />
                    <span>your vision.</span>
                </h2>
                </div>

                <p>
                At Lintelz, we combine technical expertise, innovative
                thinking and practical experience to deliver exceptional
                results across every stage of the built environment.
                </p>
            </section>

            <section className="service-list">
                {servicesLists.map((service, index) => (
                <article className="service-card" key={service.number}>
                    <div className="service-top">
                    <span className="service-number">{service.number}</span>
                    <span className="service-label">OUR SERVICES</span>
                    </div>

                    <div className="service-main">
                    <div className="service-icon">
                        <img src={service.icon} alt="" />
                    </div>

                    <div className="service-content">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>

                        <div className="service-features">
                        {service.features.map((feature) => (
                            <span key={feature}>
                            <i>↗</i> {feature}
                            </span>
                        ))}
                        </div>
                    </div>

                    <a
                        href="/contact"
                        className="service-arrow"
                        aria-label={`Enquire about ${service.title}`}
                    >
                        ↗
                    </a>
                    </div>
                </article>
                ))}
            </section>

            <section className="services-cta">
                <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
                <h2>
                Let's build something
                <br />
                <span>remarkable together.</span>
                </h2>
                <p>
                Have a project or need professional engineering advice?
                Our team is ready to help.
                </p>
                <a href="/contact" className="cta-button">
                Start a Conversation <span>↗</span>
                </a>
            </section>
        </>
    )
}