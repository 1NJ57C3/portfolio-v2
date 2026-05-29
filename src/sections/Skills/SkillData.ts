type SkillCategory = "language" | "frontend" | "backend" | "infra" | "workflow";

interface Skill {
  name: string;
  website: string;
  category: SkillCategory;
}

const skills: Skill[] = [];

skills.push({ name: "JavaScript", website: "https://javascript.com/", category: "language" });
skills.push({ name: "TypeScript", website: "https://typescript.org/", category: "frontend" });
skills.push({ name: "Python", website: "https://python.org/", category: "language" });
skills.push({ name: "Ruby", website: "https://ruby-lang.org/", category: "language" });
skills.push({ name: "SQL", website:"", category: "language" });

skills.push({ name: "React", website: "https://react.dev/", category: "frontend" });
skills.push({ name: "HTML5", website: "https://w3.org/html/", category: "frontend"});
skills.push({ name: "CSS3", website: "https://w3.org/Style/CSS/Overview.en.html", category: "frontend" });

skills.push({ name: "Node.js", website: "https://nodejs.org", category: "backend" });
skills.push({ name: "Django", website: "https://djangoproject.com", category: "backend" });
skills.push({ name: "Ruby on Rails", website: "https://rubyonrails.org", category: "backend" });
skills.push({ name: "PostgreSQL", website: "https://postgresql.org", category: "backend" });

skills.push({ name: "Git", website: "https://git-scm.com", category: "infra" });
skills.push({ name: "Vercel", website: "https://vercel.com", category: "infra" });
skills.push({ name: "CI/CD", website: "", category: "infra" });

skills.push({ name: "GitHub", website: "https://github.com", category: "workflow" });
skills.push({ name: "Postman", website: "", category: "workflow" });

export { skills };
