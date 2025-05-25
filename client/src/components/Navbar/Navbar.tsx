import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Navbar = () => {
    const [dark, setDark] = useState(
        typeof window !== "undefined" ? document.documentElement.classList.contains('dark') : false
    );

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark');
        setDark(!dark);
    };

    return (
        <nav className="app-navbar">
            <div className="app-navbar-title">Item Management App</div>
            <button className="navbar-dark-btn" onClick={toggleDarkMode} aria-label="Toggle Dark Mode">
                <FontAwesomeIcon icon={dark ? faSun : faMoon} />
            </button>
        </nav>
    );
};

export default Navbar;