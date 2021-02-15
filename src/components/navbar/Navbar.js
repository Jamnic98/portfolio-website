import { NavLink } from 'react-router-dom';
import { FaHome, FaPencilRuler, FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
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

    const projectNavItem = <div><div className={navStyles.icon}><FaPencilRuler /></div><span>Projects</span></div>

    if (window.innerWidth < 400) {
      return (
        <NavLink
          to='/projects'
          onClick={handleProjectsClick}
          className={`${navStyles.navLink}`}

        >
          {projectNavItem}
        </NavLink>
      );
    } else {
      return (
        <div
          onClick={handleProjectsClick}
          className={`${navStyles.navLink}`}
        >
          {projectNavItem}
        </div>
      );
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
        <li
          onMouseLeave={handleMouseLeave}
          className={`${navStyles.navItem}`}
        >
          {setDropdownComponent()}
          {dropdown && <Dropdown />}
        </li>
        <li className={`${navStyles.navItem}`}>
          <a href='mailto:jamiestimpson30@gmail.com' className={`${navStyles.navLink}`} >
            <div className={navStyles.icon}><MdEmail /></div><span>Email</span>
          </a>
        </li>

        <li className={`${navStyles.navItem}`}>
          <a
            href='https://github.com/Jamnic98/repositories'
            target='_blank'
            rel='noreferrer'
            onClick={closeMobileMenu}
            className={`${navStyles.navLink}`}
          >
            <div className={navStyles.icon}><span><FaGithub /></span></div>
          </a>
          <a
            href='https://www.linkedin.com/in/jamie-stimpson-23ab11203/'
            target='_blank'
            rel='noreferrer'
            onClick={closeMobileMenu}
            className={`${navStyles.navLink}`}
          >
            <div className={navStyles.icon}><span><FaLinkedin /></span></div>
          </a>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;