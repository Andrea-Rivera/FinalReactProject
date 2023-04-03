import Skilldata from "./skillData";
import Skillcard from "./card/skillcard/skillcard";
import "./skills.css";

const Skills = () => {
  return (
    <>
      <section id="skills">
        <h1>My Skills</h1>
        <p>These are my programming skills:</p>
      </section>

      <div className="flippable-cards-container ">
        {Skilldata.map((skill, index) => (
          <Skillcard key={index} skilldata={skill} />
        ))}
      </div>
    </>
  );
};

export default Skills;
