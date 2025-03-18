import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import './footer.css'
import { faJs } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    return (
        <div className="footer">
            <p>Built with <FontAwesomeIcon icon={faReact} /><FontAwesomeIcon icon={faJs} /></p>
        </div>
    )
}