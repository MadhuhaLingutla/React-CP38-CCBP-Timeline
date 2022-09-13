// Write your code here

import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseItem} = props
  const {courseTitle, description, duration, tagsList} = courseItem

  const renderTags = () => (
    <div className="tags-container">
      {tagsList.map(each => (
        <p className="tag" type="button" key={each.id}>
          {each.name}
        </p>
      ))}
    </div>
  )

  return (
    <div className="course-container">
      <div className="heading-duration-container">
        <h1 className="title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle className="icon-image" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      {renderTags()}
    </div>
  )
}

export default CourseTimelineCard
