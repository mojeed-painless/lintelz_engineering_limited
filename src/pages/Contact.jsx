import PageHeader from "../components/PageHeader";
import Construction from "../components/Construction";

export default function Contact() {
    return (
        <>
            <PageHeader 
                title="Contact Us" 
                subtitle="Get in touch with us for inquiries, support, or feedback."
                className="contact__page-header" 
            />
            <Construction />
        </>
    )
}