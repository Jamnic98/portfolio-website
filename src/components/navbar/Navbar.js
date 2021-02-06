import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar() {

    const linkStyle = { color: "white", fontSize: 20, textDecoration: "none", justifyContent: "center", alignContent: "center" }

    return (
        <nav className="nav sticky-nav">
            <ul style={{ margin: "auto" }}>
                <li className="nav-item"><Link to='/' style={linkStyle}>Home</Link></li>
                <li className="nav-item"><Link to='/projects' style={linkStyle}>Projects</Link></li>
                <li className="nav-item"><a href="mailto:jamiestimpson30@gmail.com" style={linkStyle}>Email</a>{/* <Link style={linkStyle} to=''>About</Link> */}</li>
            </ul>
        </nav>
    );
}

export default Navbar;