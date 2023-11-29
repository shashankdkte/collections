import ProjectCategories from '../project_categories/ProjectCategories'
import './portfolio.css'
import Projects from "../projects/Projects"
import { useState } from 'react';
import data from './data';
import da from "./da"
import ProjectTags from '../project_tags/ProjectTags';

const Portfolio = () => {
  const [projects, setProjects] = useState(data);
  const [tagsDisplay,setTags] = useState([])
  // console.log(data);
  const categories = data.map(item => item.category);
  const uniqueCategories = ["all", ...new Set(categories)];
  const tags = da.map(item => item.tags);
  const uniqueTags = [...new Set(tags.flat(1))]

  // console.log();
  const filtering = da.filter(project => project.tags.includes(uniqueTags[2]))
  console.log(filtering);

  const filterTagsHandler = (tag) => {
    setProjects([])
    const filterProjects = da.filter(project => project.tags.includes(tag))
    setProjects(filterProjects)

  }
  const filterProjectsHandler = (category) => {
    setProjects([])
      
    if(category === "all") {
      setProjects(data);
      return;
    }

    const filterProjects = data.filter(project => project.category === category);
    setProjects(filterProjects);
  }
  return (
    <section id="portfolio">
      <h2>Projects Directory</h2>
      <p>Built over {projects.length}+ projects</p>
      <p>
      Check out some of the projects I recently worked on for my clients. Use the buttons to toggle the different categories.
      </p>
      <div className="container profile__container">
        <ProjectCategories categories={uniqueCategories} onFilterProjects={filterProjectsHandler} />
        <ProjectTags tags={uniqueTags} onFilterTags={filterTagsHandler}/>
        <Projects projects={projects}/>
      </div>
    </section>
  )
}

export default Portfolio