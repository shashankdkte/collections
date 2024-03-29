import React from 'react'
import Card from '../card/Card'

const Project = ({project}) => {
  return (
    <Card className="portfolio__project">
        <div className="portfolio__project-image">
            <img src={project.image} alt="" />
        </div>
        <h4>{project.title}</h4>
      <p>{project.desc}</p>
      {project.tags && project.tags.map(tag =><span className='tag' key={tag}>{tag}</span>)}
        <div className="portfolio__project-cta">
            <a href={project.demo} className="btn sm" target="_blank" rel="noopner noreferrer">Demo</a>
            <a href={project.github} className="btn sm primary" target="_blank" rel="noopner noreferrer">Gitbub</a>
        </div>
    </Card>
  )
}

export default Project