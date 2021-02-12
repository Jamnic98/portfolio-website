import { NavLink } from 'react-router-dom';
import { FaHome, FaPencilRuler, FaBars, FaTimes } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useState } from 'react';
import Dropdown from '../dropdown/Dropdown';

import navStyles from './Navbar.module.css';

function Navbar() {

    const [clicked, setClicked] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClicked(!clicked);

    const closeMobileMenu = () => setClicked(false);

    const handleMouseLeave = () => {
        setDropdown(false);
    };

    const handleDropdownClick = () => {
        if (window.innerWidth < 400) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    }

    const handleProjectsClick = () => {
        handleDropdownClick()
        closeMobileMenu()
    }

    const setDropdownComponent = () => {

        if (window.innerWidth < 400) {
            return (
                <li
                    onMouseLeave={handleMouseLeave}
                    className={`${navStyles.navItem}`}
                >
                    <NavLink
                        to='/projects'
                        onClick={handleProjectsClick}
                        className={`${navStyles.navLink}`}

                    >
                        <div className={navStyles.icon}><FaPencilRuler /></div><span>Projects</span>
                    </NavLink>
                    {dropdown && <Dropdown />}
                </li>);
        } else {
            return (
                <li
                    onMouseLeave={handleMouseLeave}
                    className={`${navStyles.navItem}`}
                >
                    <div
                        onClick={handleProjectsClick}
                        className={`${navStyles.navLink}`}
                    >
                        <div className={navStyles.icon}><FaPencilRuler /></div>
                        <span>Projects</span>
                    </div>
                    {dropdown && <Dropdown />}
                </li>);
        }
    }

    return (
        <nav className={`${navStyles.navbar}`}>
            <div onClick={handleClick} className={`${navStyles.menuIcon}`}>
                {clicked ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={`${navStyles.navMenu} ${clicked ? `${navStyles.active}` : ''}`}>
                <li className={`${navStyles.navItem}`}>
                    <NavLink exact
                        to='/'
                        onClick={closeMobileMenu}
                        className={`${navStyles.navLink}`}
                    >
                        <div className={navStyles.icon}><FaHome /></div><span>Home</span>
                    </NavLink>
                </li>
                {setDropdownComponent()}
                <li className={`${navStyles.navItem}`}>
                    <a href='mailto:jamiestimpson30@gmail.com' className={`${navStyles.navLink}`} >
                        <div className={navStyles.icon}><MdEmail /></div><span>Email</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;