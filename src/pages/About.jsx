import PageHeader from "../components/PageHeader";
import Construction from "../components/Construction";

export default function About() {
    return (
        <>
            <PageHeader 
                title="About Us" 
                subtitle="Learn more about our company and mission."
                className="about__page-header" 
            />

            <Construction />
            
        </>
    )
}