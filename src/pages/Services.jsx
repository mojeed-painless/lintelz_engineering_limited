import PageHeader from "../components/PageHeader";
import Construction from "../components/Construction";

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