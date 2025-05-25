import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
    <footer className="app-footer">
        <div className="footer-icons">
            <a href="https://github.com/camposjoaoc" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} className="footer-icon" />
            </a>
            <a href="https://www.linkedin.com/in/joaoccampos/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
            </a>
        </div>
        <div className="footer-text">
            Developed by <a href="https://github.com/camposjoaoc" target="_blank" rel="noopener noreferrer">João Campos</a>
        </div>
        <div className="footer-stacks">
            <span className="footer-stack">MongoDB</span>
            <span className="footer-stack">Express</span>
            <span className="footer-stack">React</span>
            <span className="footer-stack">Node.js</span>
            <span className="footer-stack">Tailwind CSS</span>
        </div>
        <div className="footer-copyright">
            <p>© {new Date().getFullYear()} MERN Project</p>
        </div>
    </footer>
);

export default Footer;