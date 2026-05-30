import { skills } from "./SkillData";
// import SkillCard from "./SkillCard";

function Skills() {
  const displaySkills = skills.map((skill) => 
    <li key={skill.id}>
      {/* <SkillCard {...skill} /> */}
      <p>{skill.name}</p>
    </li>
  );

  return (
    <section className="skills" id="skills">
      <h2>Toolkit</h2>
      <ul className="list-reset skills-grid">{displaySkills}</ul>
    </section>
  );
}

export default Skills;
