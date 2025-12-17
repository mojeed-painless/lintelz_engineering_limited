import PageHeader from "../components/PageHeader";  
import Construction from "../components/Construction";

export default function Projects() {
    return (
        <>
            <PageHeader 
                title="Our Projects" 
                subtitle="Explore some of the projects we have successfully completed."
                className="projects__page-header" 
            />
            <Construction />
        </>
    )
}