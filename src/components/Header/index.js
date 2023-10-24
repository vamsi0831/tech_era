import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <Link className="route-link" to="/">
      <div className="logo-and-title-container">
        <img
          alt="website logo"
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        />
      </div>
    </Link>
  </nav>
)

export default Header
