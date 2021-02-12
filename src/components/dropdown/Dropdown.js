import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import projects from '../../appData';

import ddStyles from './Dropdown.module.css';
import navStyles from '../navbar/Navbar.module.css';

const Dropdown = () => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => setClicked(!clicked);

    return (
        <ul
            onClick={handleClick}
            className={`${ddStyles.dropdown} ${clicked ? `${ddStyles.clicked}` : ""}`}
        >
            <li className={`${navStyles.navItem}`}>
                <NavLink
                    exact
                    to='/projects'
                    onClick={handleClick}
                    className={`${navStyles.navLink}`}
                >
                    All Projects
                    <hr />
                </NavLink>
            </li>
            {projects.map((project, index) => {
                return (
                    <li key={index} className={`${navStyles.navItem}`}>
                        <NavLink
                            to={project.url}
                            className={`${navStyles.navLink}`}
                        >{project.title}
                        </NavLink>
                    </li>
                );
            })}
        </ul>
    );
}

export default Dropdown;