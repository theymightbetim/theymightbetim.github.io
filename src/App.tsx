import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { SocialLinks } from './components/social/social'

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


export default App
