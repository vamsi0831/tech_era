import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CourseItem from '../CourseItem'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CourseList extends Component {
  state = {courseData: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getCourseData()
  }

  getCourseData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const response = await fetch('https://apis.ccbp.in/te/courses')
    console.log(response)
    if (response.ok === true) {
      const data = await response.json()
      const formattedData = data.courses.map(eachItem => ({
        id: eachItem.id,
        name: eachItem.name,
        logoUrl: eachItem.logo_url,
      }))
      this.setState({
        courseData: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoaderView = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
    </div>
  )

  renderCourseItem = () => {
    const {courseData} = this.state
    return (
      <div className="courses-list-container">
        <h1 className="course-item-title ">Courses</h1>
        <ul className="courses-list">
          {courseData.map(eachCourseItem => (
            <CourseItem
              key={eachCourseItem.id}
              courseItemDetails={eachCourseItem}
            />
          ))}
        </ul>
      </div>
    )
  }

  onClickRetry = () => {
    this.getCourseData()
  }

  renderFailureView = () => (
    <div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png "
          alt="failure view"
        />
      </div>
      <div>
        <h1>Oops! Something Went Wrong</h1>
        <p>We cannot seem to find the page you are looking for.</p>
        <button type="button" onClick={this.onClickRetry}>
          Retry
        </button>
      </div>
    </div>
  )

  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderCourseItem()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      default:
        return null
    }
  }
}

export default CourseList
