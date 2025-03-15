import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './social.css'

export const SocialLinks = () => {
    return (
    <div className="SocialLinks">
        <a href="https://linkedin.com/in/timothy-mackenzie">
        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>  |  
        <a href="https://github.com/theymightbetim">
            <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
    </div>
    )
}