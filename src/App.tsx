import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <>
      <Header />
      <Intro />
      <SocialLinks />
    </>
  )
}

const Header = () => {
  return <h1>Tim Mackenzie - Quality Assurance Professional</h1>
}

const Intro = () => {
  return <p>Welcome to my website! It's under construction, but check back soon!</p>
}

const SocialLinks = () => {
  return (
    <div>
      <a href="https://linkin.com/in/timothy-mackenzie">
        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
      </a>  |  
      <a href="https://github.com/theymightbetim">
        <FontAwesomeIcon icon={faGithub} /> GitHub
      </a>
    </div>
    )
}

export default App
