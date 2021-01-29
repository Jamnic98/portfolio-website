import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar() {

    const linkStyle = { color: "black", textDecoration: "none" }

    return (
        <nav className="nav sticky-nav">
            <ul>
                <li className="nav-item"><Link style={linkStyle} to='/'>Home</Link></li>
                <li className="nav-item"><Link style={linkStyle} to='/projects'>Projects</Link></li>
                {/* <li className="nav-item"><Link style={linkStyle} to='/contact'>About</Link></li> */}
            </ul>
        </nav>
    );
}

export default Navbar;