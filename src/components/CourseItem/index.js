import {Link} from 'react-router-dom'

import './index.css'

const CourseItem = props => {
  const {courseItemDetails} = props
  const {id, logoUrl, name} = courseItemDetails

  return (
    <li className="course-item">
      <Link to={`/courses/${id}`} className="course-item-link">
        <div className="course-item-container">
          <img className="course-item-image" src={logoUrl} alt={name} />
          <p className="course-item-info ">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default CourseItem
