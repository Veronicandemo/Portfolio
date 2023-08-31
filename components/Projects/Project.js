import React from 'react'
import classes from './Project.module.css'
import { projects } from './data'
import ProjectsCards from './ProjectsCards'

export default function Project() {
  return (
    <div className={classes.projects} id="Projects">
      <h2 className={classes.heading}>My Latest Projects</h2>
      <p className={classes.description}>
        Below is a list of the projects that I have done over the years
      </p>
      <div className={classes.projectsContainer}>
        {projects.map((project) => (
          <ProjectsCards
            key={project.title}
            subTitle={project.subHeading}
            heading={project.title}
            imageUrl={project.imageUrl}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
      <div className={classes.linkContainer}>
        <a
          target="_blank"
          href="https://github.com/Veronicandemo?tab=repositories"
        >
          View More
        </a>
      </div>
    </div>
  )
}
