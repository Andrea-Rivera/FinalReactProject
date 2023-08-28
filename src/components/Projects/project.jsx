import "./projects.css";
import CardProject from "../Cards/cardProject";

const Project = ({ project }) => {
  return (
    <div>
      <CardProject className={"portfolio_project"}>
        <div className="portfolio_project-image">
          <img src={project.image} alt="Portfolio Projects" />
        </div>
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <div className="portfolio_project-cta">
          <a
            href={project.demo}
            className="btn sm"
            target="_blank"
            rel="noopener noreferrer"
            disabled = {project.isDisabled}
            
          >
            Demo
          </a>
          <a
            href={project.github}
            className="btn sm primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </CardProject>
    </div>
  );
};
export default Project;