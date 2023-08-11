import React from "react";

function ProjectItem({ name, about, technologies }) {

  let technoCounter = 1;
  const techno = technologies.map((tech) => {
    technoCounter++
    return <span key={technoCounter}>{tech}</span>
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techno}
      </div>
    </div>
  );
}

export default ProjectItem;
