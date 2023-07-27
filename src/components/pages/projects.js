import React from "react";
import ProjectDisplay from "../projectList/projectDisplay";
import ProjectListData from "../projectList/projectListData";
import { useState } from "react";

const Projects = () => {
  const [projects] = useState(ProjectListData);

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
