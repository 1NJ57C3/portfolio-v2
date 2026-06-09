import { projects } from "./ProjectData";
import ProjectCard from "./ProjectCard";
import "./projects.css";

function Projects() {
  const displayProjects = projects.map((project) => (
    <li key={project.id} className="projects-item">
      <ProjectCard {...project} />
    </li>
  ));

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Selected Work</h2>
        <ul className="list-reset projects-grid">{displayProjects}</ul>
      </div>
    </section>
  );
}

export default Projects;
