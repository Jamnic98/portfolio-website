import CardList from '../card/CardList';
import { Link } from 'react-router-dom';
import './ProjectsOverview.css';

function ProjectsOverview(props) {

    return (
        <section className='page-contents'>
            <h1>Projects Overview</h1>
            <p>Here is a collection of the most notable personal programming projects I have completed so far.</p>
            <p>Click on a project for more information.</p>
            <CardList projects={props.projects} />
        </section>
    )
}

export default ProjectsOverview;
