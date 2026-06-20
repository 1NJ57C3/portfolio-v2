import type { Project } from "./ProjectData";

function ProjectCard({ title, description }: Project) {
  return (
    <article className="project-card">
      <img alt="" />
      <h3>{title}</h3>
      <p>{description.slice(0,150)}</p>
      <button className="button-reset project-card-cta" onClick={openProjectModal}>View Project &rarr;</button>
    </article>
  );
}

export default ProjectCard;
