export const skillCategories = [
  { name: "language", label: "Languages" },
  { name: "frontend", label: "Frontend Systems" },
  { name: "backend", label: "Backend & Data" },
  { name: "infra", label: "Tools & Infrastructure" },
  { name: "workflow", label: "Design & Workflow" },
] as const;

type SkillCategory = (typeof skillCategories)[number];

interface Skill {
  id: number;
  name: string;
  website: string;
  category: SkillCategory["name"];
}

type RawSkill = Omit<Skill, "id">;

const rawSkills: RawSkill[] = [];

rawSkills.push({
  category: "language",
  name: "JavaScript",
  website: "https://javascript.com/",
});
rawSkills.push({
  category: "language",
  name: "TypeScript",
  website: "https://typescript.org/",
});
rawSkills.push({
  category: "language",
  name: "Python",
  website: "https://python.org/",
});
rawSkills.push({
  category: "language",
  name: "Ruby",
  website: "https://ruby-lang.org/",
});
rawSkills.push({ category: "language", name: "SQL", website: "" });

rawSkills.push({
  category: "frontend",
  name: "React",
  website: "https://react.dev/",
});
rawSkills.push({
  category: "frontend",
  name: "HTML5",
  website: "https://w3.org/html/",
});
rawSkills.push({
  category: "frontend",
  name: "CSS3",
  website: "https://w3.org/Style/CSS/Overview.en.html",
});

rawSkills.push({
  category: "backend",
  name: "Node.js",
  website: "https://nodejs.org/",
});
rawSkills.push({
  category: "backend",
  name: "Django",
  website: "https://djangoproject.com/",
});
rawSkills.push({
  category: "backend",
  name: "Ruby on Rails",
  website: "https://rubyonrails.org/",
});
rawSkills.push({
  category: "backend",
  name: "PostgreSQL",
  website: "https://postgresql.org/",
});

rawSkills.push({
  category: "infra",
  name: "Git",
  website: "https://git-scm.com/",
});
rawSkills.push({
  category: "infra",
  name: "Vercel",
  website: "https://vercel.com",
});
rawSkills.push({ category: "infra", name: "CI/CD", website: "" });

rawSkills.push({
  category: "workflow",
  name: "GitHub",
  website: "https://github.com/",
});
rawSkills.push({
  category: "workflow",
  name: "Postman",
  website: "https://postman.com/",
});

export const skills: Skill[] = rawSkills.map((skill, id) => ({ id, ...skill }));
