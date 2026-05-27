import { ProjectData } from "./ProjectData";
import ProjectCard from "./ProjectCard";

function Projects() {
  const displayProjects = ProjectData.map((project) => (
    <li key={project.id}>
      <ProjectCard {...project} />
    </li>
  ));

  return (
    <section className="projects" id="projects">
      <h2>Selected Work</h2>
      <ul className="projects-grid">{displayProjects}</ul>
    </section>
  );
}

export default Projects;
