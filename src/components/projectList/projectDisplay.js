import Project from "./project";

const ProjectDisplay = ({ projects }) => {
  return (
    <div className="portfolio_projects">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectDisplay;
