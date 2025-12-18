import PageHeader from "../components/PageHeader";
import Construction from "../components/Construction";
import '../assets/styles/service.css'

export default function Services() {
    return (
        <>
            <PageHeader 
                title="Our Services" 
                subtitle="Discover the range of services we offer to meet your needs."
                className="services__page-header" 
            />
            <Construction />
        </>
    )
}