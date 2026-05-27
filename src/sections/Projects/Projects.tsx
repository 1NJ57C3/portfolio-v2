import { projects } from "./ProjectData";
import ProjectCard from "./ProjectCard";
import "./projects.css";

function Projects() {
  const displayProjects = projects.map((project) => (
    <li key={project.id}>
      <ProjectCard {...project} />
    </li>
  ));

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Selected Work</h2>
        <ul className="projects-grid">{displayProjects}</ul>
      </div>
    </section>
  );
}

export default Projects;
