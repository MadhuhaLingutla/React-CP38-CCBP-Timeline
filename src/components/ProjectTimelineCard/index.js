// Write your code here

import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectItem} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectItem

  return (
    <div className="project-container">
      <img src={imageUrl} className="project-image" alt="project" />

      <div className="heading-duration-container">
        <h1 className="title">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar className="icon-image" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a
        href={projectUrl}
        className="project-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
