import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="head_container">
    <div className="logo_container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
        alt="wave"
        className="image"
      />
      <h1 className="wave_heading">wave</h1>
    </div>
    <ul className="link_container">
      <li>
        <Link className="wave_heading" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="wave_heading" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="wave_heading" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
