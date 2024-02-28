import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const bgCont = isDarkTheme ? 'bg-dark' : 'bg-light'

      const headText = isDarkTheme ? 'text-dark' : 'text-light'

      return (
        <div className={bgCont}>
          <Navbar />
          <div className="align">
            <img src={aboutImg} alt="about" className="about-img" />
            <h1 className={headText}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
