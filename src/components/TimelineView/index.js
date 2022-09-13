// Write your code here

import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const getTimelines = () => {
    const timelines = timelineItemsList.map(each => ({title: each.title}))

    console.log(timelines)

    return (
      <div className="chrono-container">
        <Chrono mode="VERTICAL_ALTERNATING" items={timelines}>
          {timelineItemsList.map(each => {
            if (each.categoryId === 'COURSE') {
              return <CourseTimelineCard courseItem={each} key={each.id} />
            }
            return <ProjectTimelineCard projectItem={each} key={each.id} />
          })}
        </Chrono>
      </div>
    )
  }

  return (
    <div className="timeline-container">
      <h2 className="main-heading-1">
        MY JOURNEY OF <h1 className="main-heading-2">CCBP 4.0</h1>
      </h2>

      <div className="responsive-container">{getTimelines()}</div>
    </div>
  )
}

export default TimelineView
