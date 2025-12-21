import { Link } from 'react-router-dom'
import PageHeader from "../components/PageHeader";
import SectionHeader from "../components/SectionHeader";  
import '../assets/styles/project.css';
import { projects, executedProjects } from '../data';

export default function Projects() {
    return (
        <>
            <PageHeader 
                title="Our Projects" 
                subtitle="Explore some of the projects we have successfully completed."
                className="projects__page-header" 
            />

            <section className="container projects__container">
                <div className="project__body">
                    {projects.map(({ id, image, title, description, action }) => (
                        <div key={id} className="project__card">
                            <div className="project__image">
                                <img src={image} alt={title} />
                            </div>

                            <div className="project__text">
                               <h4>{title}</h4>
                                <small>{description}</small> 
                            </div>
                            
                            <button type="button" className='primary-btn'><Link to={action}>Read Project Description</Link></button>
                        </div>
                    ))}
                </div>
            </section>

             <section className="container execute__container">
                <div className="execute__content">
                    <SectionHeader title="Executed Projects" />

                    <div className="execute__body">
                        {executedProjects.map(({ id, project, time }) => (
                            <div key={id} className="execute__card">
                                <small>project #{id}</small>
                                <p>{project}</p>
                                {time && <small>{time}</small>}
                            </div>
                        ))}
                    </div>
                </div>
             </section>

        </>
    )
}