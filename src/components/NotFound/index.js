import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        alt="not found"
        className="not-found-img"
      />
    </Link>
    <h1 className="not-found-heading">Page Not Found</h1>
    <p className="not-found-content">
      We are sorry, the page you requested could not be found
    </p>
  </div>
)

export default NotFound
