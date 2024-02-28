import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const bgCont = isDarkTheme ? 'bg-dark' : 'bg-light'

      const headText = isDarkTheme ? 'text-dark' : 'text-light'

      return (
        <div className={bgCont}>
          <Navbar />
          <div className="align">
            <img
              className="img"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1 className={headText}>Lost Your Way?</h1>
            <p className={headText}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
