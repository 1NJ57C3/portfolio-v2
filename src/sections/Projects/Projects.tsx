import { ProjectData } from "./ProjectData";
import ProjectCard from "./ProjectCard";

function Projects() {
  const displayProjects = ProjectData.map((project) => (
    <ProjectCard {...project} />
  ));

  return (
    <section className="projects" id="projects">
      <h2>Selected Work</h2>
      <div className="project-grid">{displayProjects}</div>
    </section>
  );
}

export default Projects;
