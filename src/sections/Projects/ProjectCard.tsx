import type { Project } from "./ProjectData";

function ProjectCard({ title, description, repoURL }: Project) {
  return (
    <article className="project-card">
      <img alt="" />
      <h3>{title}</h3>
      <p>{description.slice(0,150)}</p>
      <a href={repoURL}>{repoURL}</a>
    </article>
  );
}

export default ProjectCard;
