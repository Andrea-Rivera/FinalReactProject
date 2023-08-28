import {React, useState } from "react";
import ProjectDisplay from "../Projects/projectDisplay";
import ProjectData from "../Projects/projectData";


const Projects = () => {
  const [projects] = useState(ProjectData);


  return (
    <section id="portfolio">
      <h1>Recent Projects</h1>
      <p>
          These are some of the projects I recently worked on.
      </p>
      <div className="container portfolio_container">
        <ProjectDisplay projects={projects} />
      </div>
    </section>
  );
};

export default Projects;