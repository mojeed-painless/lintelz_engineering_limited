import PageHeader from "../components/PageHeader";
import ServiceSection from "../components/ServiceSection";
import { servicesLists } from '../data';
import '../assets/styles/service.css';
import icon1 from '../assets/images/icon6.jpg';
import icon2 from '../assets/images/icon1.jpg';
import icon3 from '../assets/images/icon3.jpg';
import icon4 from '../assets/images/icon2.jpg';

export default function Services() {
    return (
        <>
            <PageHeader 
                title="Our Services" 
                subtitle="Discover the range of services we offer to meet your needs."
                className="services__page-header" 
            />

            <div className="services__container">
                <ServiceSection title="Architectural and Building design" image={icon1}>
                    <ul className="services__list">
                        {servicesLists.map(({ id, services }) => (
                            (id === 'Architecture') && services.map((service) => (
                                <li>{service}</li>
                            ))
                        ))}
                    </ul>
                </ServiceSection>




                <ServiceSection title="Engineering, Construction and Consultation Services" image={icon2}>
                    <ul className="services__list">
                        {servicesLists.map(({ id, services }) => (
                            (id === 'Consultation') && services.map((service) => (
                                <li>{service}</li>
                            ))
                        ))}
                    </ul>
                </ServiceSection>





                <ServiceSection title="Geotechnical and Foundation Engineering" image={icon3}>
                    <ul className="services__list">
                        {servicesLists.map(({ id, services }) => (
                            (id === 'Geotechnic') && services.map((service) => (
                                <li>{service}</li>
                            ))
                        ))}
                    </ul>
                </ServiceSection>





                <ServiceSection title="Project and Construction Management" image={icon4}>
                    <ul className="services__list">
                        {servicesLists.map(({ id, services }) => (
                            (id === 'Management') && services.map((service) => (
                                <li>{service}</li>
                            ))
                        ))}
                    </ul>
                </ServiceSection>
            </div>
        </>
    )
}