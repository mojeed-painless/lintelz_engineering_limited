import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectLightbox from '../components/ProjectLightbox';
import PageHeader from "../components/PageHeader";
import SectionHeader from "../components/SectionHeader";  
import '../assets/styles/project.css';
import { projects, executedProjects } from '../data';
import "../assets/styles/home.css"

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

	const filters = [
		"All Projects",
		"Structural",
		"Civil",
		"Industrial",
		"Residential",
	];

	const [activeFilter, setActiveFilter] = useState("All Projects");
	const [selectedProject, setSelectedProject] = useState(null);

	const filteredProjects =
		activeFilter === "All Projects"
			? executedProjects
			: executedProjects.filter((project) => project.type === activeFilter);

	const featured = filteredProjects.find((project) => project.featured);
	const remaining = filteredProjects.filter(
		(project) => project.id !== featured?.id,
	);


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
                            
                            <button type="button" className='primary-btn' onClick={() => handleOpenBox(title)}>Project Gallery</button>
                        </div>
                    ))}
                </div>
            </section>

            <ProjectLightbox closeBox={handleCloseBox} open={open} currentProject={currentProject}/>


            <section className="projects-content">
				<div className="projects-heading">
					<div>
						<span className="section-label">WHAT WE HAVE BUILT</span>
						<h2>
							Selected <span>Projects.</span>
						</h2>
					</div>

					<p>
						Delivering lasting value through quality construction,
						technical expertise and innovative solutions.
					</p>
				</div>

				<div className="project-filters">
					{filters.map((filter) => (
						<button
							key={filter}
							className={activeFilter === filter ? "active" : ""}
							onClick={() => setActiveFilter(filter)}
						>
							{filter}
						</button>
					))}
				</div>

				{featured && (
					<article className="featured-project">
						<div className="featured-visual">
							<div className="visual-overlay"></div>

							<span className="featured-number">01</span>

							<div className="visual-caption">
								<span>FEATURED PROJECT</span>
								<h3>Built on precision.</h3>
							</div>

							<div className="visual-decoration">L</div>
						</div>

						<div className="featured-details">
							<div className="project-topline">
								<span>{featured.category}</span>
								<span>PROJECT / {featured.id}</span>
							</div>

							<h3>{featured.title}</h3>

							<p>{featured.description}</p>

							<div className="project-meta">
								<div>
									<small>PROJECT PERIOD</small>
									<strong>{featured.date}</strong>
								</div>

								<div>
									<small>LOCATION</small>
									<strong>{featured.location}</strong>
								</div>
							</div>

							<button
								className="project-link"
								onClick={() => setSelectedProject(featured)}
							>
								EXPLORE PROJECT <span>↗</span>
							</button>
						</div>
					</article>
				)}

				<div className="project-list-heading">
					<div>
						<span className="section-label">OUR EXPERIENCE</span>
						<h2>
							More <span>Milestones.</span>
						</h2>
					</div>

					<span className="project-count">
						{String(filteredProjects.length).padStart(2, "0")} PROJECTS
					</span>
				</div>

				<div className="projects-grid">
					{remaining.map((project) => (
						<article
							className="project-item"
							key={project.id}
							onClick={() => setSelectedProject(project)}
						>
							<div className="project-item-top">
								<span className="item-number">{project.id}</span>
								<span className="item-arrow">↗</span>
							</div>

							<span className="item-category">{project.category}</span>

							<h3>{project.title}</h3>

							<p>{project.description}</p>

							<div className="item-footer">
								<span>{project.date}</span>
								<span>VIEW PROJECT ↗</span>
							</div>
						</article>
					))}
				</div>
			</section>


			<section className="projects-cta">
				<div>
					<span className="section-label">HAVE A PROJECT IN MIND?</span>
					<h2>
						Let's build something <span>remarkable.</span>
					</h2>
				</div>

				<a href="/contact" className="cta-button">
					START A CONVERSATION <span>↗</span>
				</a>
			</section>

			{selectedProject && (
				<div
					className="project-modal"
					onClick={() => setSelectedProject(null)}
				>
					<div
						className="modal-content"
						onClick={(e) => e.stopPropagation()}
					>
						<button
							className="modal-close"
							onClick={() => setSelectedProject(null)}
						>
							×
						</button>

						<span className="section-label">
							PROJECT / {selectedProject.id}
						</span>

						<h2>{selectedProject.title}</h2>

						<p>{selectedProject.description}</p>

						<div className="modal-meta">
							<div>
								<small>CATEGORY</small>
								<strong>{selectedProject.category}</strong>
							</div>

							<div>
								<small>PERIOD</small>
								<strong>{selectedProject.date}</strong>
							</div>

							<div>
								<small>LOCATION</small>
								<strong>{selectedProject.location}</strong>
							</div>
						</div>
					</div>
				</div>
			)}

        </>
    )
}