import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import projects from '../../appData';

import ddStyles from './Dropdown.module.css';


const Dropdown = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => setClicked(!clicked);

  return (
    <ul
      onClick={handleClick}
      className={`${ddStyles.dropdown} ${clicked ? `${ddStyles.clicked}` : ""}`}
    >
      <li className={`${ddStyles.navItem}`}>
        <NavLink
          to='/projects'
          onClick={handleClick}
          className={`${ddStyles.navLink}`}
        >
          All Projects
        <hr />
        </NavLink>
      </li>
      {projects.map((project, index) => {
        return (
          <li key={index} className={`${ddStyles.navItem}`}>
            <NavLink
              to={project.url}
              className={`${ddStyles.navLink}`}
            >{project.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default Dropdown;