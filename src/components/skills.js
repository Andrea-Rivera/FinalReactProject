import Skilldata from "./skillData";
import CardProject from "./card/cardProject";

const Skills = () => {
  return (
    <section id="skills">
      <h1>My Skills</h1>
      <p>These are my programming skills:</p>

      <div className="container services_container">
        {Skilldata.map((item) => (
          <CardProject key={item.id}>
            <div id="progressBar"></div>
            <div className="service_icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </CardProject>
        ))}
      </div>
    </section>
  );
};

export default Skills;
