import "./skills.css";
import SkillData from "./skillData";
import SkillCard from "../Cards/skillCard";
import "./skills.css";

const Skills = () => {
    return(
        <>
        <section id="skills">
            <h1>My Skills</h1>
            <p>These are my programming skills:</p>
          </section>
    
          <div className="flippable-cards-container ">
            {SkillData.map((skill, index) => (
              <SkillCard key={index} SkillData={skill} />
            ))}
          </div>
          </>
        )
}

export default Skills