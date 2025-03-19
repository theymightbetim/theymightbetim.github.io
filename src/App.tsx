import './App.css'
import { Footer } from './components/footer/footer'
import { Navbar } from './components/nav/navbar'
import { Home } from './pages/home'
import { Blog } from './pages/blog'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
