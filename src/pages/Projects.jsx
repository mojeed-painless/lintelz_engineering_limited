import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectLightbox from '../components/ProjectLightbox';
import PageHeader from "../components/PageHeader";
import SectionHeader from "../components/SectionHeader";  
import '../assets/styles/project.css';
import { projects, executedProjects } from '../data';

export default function Projects() {

    const [open, setOpen] = useState(false);
    const [ currentProject, setCurrentProject ] = useState('');

    function handleOpenBox(projectTitle) {
        setOpen(true);
        setCurrentProject(projectTitle);
    }

    function handleCloseBox() {
        setOpen(false);
    }


    return (
        <>
            <PageHeader 
                title="Our Projects" 
                subtitle="Explore some of the projects we have successfully completed."
                className="projects__page-header" 
            />

            <section className="container projects__container">
                <div className="project__body">
                    {projects.map(({ id, image, title, description }) => (
                        <div key={id} className="project__card">
                            <div className="project__image">
                                <img src={image} alt={title} />
                            </div>

                            <div className="project__text">
                                <h4>{title}</h4>
                                <small>{description}</small> 
                            </div>
                            
                            <button type="button" className='primary-btn' onClick={() => handleOpenBox(title)}>Read Project Description</button>
                        </div>
                    ))}
                </div>
            </section>

            <ProjectLightbox closeBox={handleCloseBox} open={open} currentProject={currentProject}/>

            <section className="container execute__container">
                <div className="execute__content">
                    <SectionHeader title="Executed Projects" />

                    <div className="execute__body">
                        {executedProjects.map(({ id, project, time }, index) => (
                            <div key={id} className="execute__card">
                                <small>project #{index + 1}</small>
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