import './App.css'
import { SocialLinks } from './components/social/social'
import { Footer } from './components/footer/footer'
import { Navbar } from './components/nav/navbar'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Intro />
      <SocialLinks />
      <Footer />
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
