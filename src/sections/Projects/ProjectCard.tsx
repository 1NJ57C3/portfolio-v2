import type { Project } from "./ProjectData";

function ProjectCard({ title, description }: Project) {
  return (
    <article className="project-card">
      <h3 className="project-card-title">{title}</h3>
      <p className="project-card-description">
        {description.short.slice(0, 150)}
        {description.short.length > 150 && "..."}
      </p>
      <button className="button-reset project-card-cta">
        View Project &rarr;
      </button>
    </article>
  );
}

export default ProjectCard;
