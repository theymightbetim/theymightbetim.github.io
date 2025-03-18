import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './navbar.css'

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navlink">
                <a href="/" data-testid="home-link">Home</a>
            </div>
            <div className="navlink">
                <a href="/about" data-testid="about-link">About</a>
            </div>
            <div className="navlink">
                <a href="https://github.com/theymightbetim?tab=repositories" data-testid="projects-link"> <FontAwesomeIcon icon={faGithub} />Projects</a>
            </div>
            <div className="navlink">
                <a href="/blog" data-testid="blog-link">Blog</a>
            </div>
            <div className="navlink">
                <a href="/contact" data-testid="contact-link">Contact</a>
            </div>
        </div>
    )
}