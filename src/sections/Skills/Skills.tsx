import { skillCategories, skills } from "./SkillData";
// import SkillCard from "./SkillCard";

function Skills() {
  const displaySkills = skillCategories.map((category) => (
    <section key={category.name} className="skills-column">
      <h3>{category.label}</h3>
      <ul className="list-reset">
        {skills.map(
          (skill) =>
            category.name === skill.category && (
              <li key={skill.id} className="skills-item">
                {/* <SkillCard {...skill} /> */}
                <p>{skill.name}</p>
              </li>
            ),
        )}
      </ul>
    </section>
  ));

  return (
    <section className="skills" id="skills">
      <h2>Toolkit</h2>
      <div className="skills-grid">{displaySkills}</div>
    </section>
  );
}

export default Skills;
