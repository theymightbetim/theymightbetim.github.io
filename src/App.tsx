import './App.css'
import { Footer } from './components/footer/footer'
import { Navbar } from './components/nav/navbar'
import { Home } from './pages/home'
import { Blog } from './pages/blog'
import { About } from './pages/about'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
