import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleTheme = () => {
        toggleTheme()
      }

      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const lightTheme = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navBg = isDarkTheme ? 'dark-bg' : 'light-bg'

      const navText = isDarkTheme ? 'text-dark' : 'text-light'

      return (
        <nav className={`nav ${navBg}`}>
          <img src={websiteLogo} alt="website logo" className="nav-img" />
          <ul className="align-ele">
            <li className="list-item">
              <Link to="/" className={`link ${navText}`}>
                Home
              </Link>
            </li>

            <li className="list-item">
              <Link to="/about" className={`link ${navText}`}>
                About
              </Link>
            </li>
          </ul>

          <button
            className="btn"
            type="button"
            data-testid="theme"
            onClick={onToggleTheme}
          >
            <img src={lightTheme} alt="theme" className="nav-img" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
