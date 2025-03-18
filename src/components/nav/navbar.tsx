import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './navbar.css'

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navlink"><a href="/" >Home</a></div>
            <div className="navlink"><a href="/about" >About</a></div>
            <div className="navlink"><a href="https://github.com/theymightbetim" > <FontAwesomeIcon icon={faGithub} />Projects</a></div>
            <div className="navlink"><a href="/blog" >Blog</a></div>
            <div className="navlink"><a href="/contact" >Contact</a></div>
        </div>
    )
}