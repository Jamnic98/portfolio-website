import CardList from '../card/CardList';
import './Projects.css';

function Projects() {
    return (
        <div className="container">
            <header className="page-header fade-in-left">
                <h1>Projects Overview</h1>
                <p>A short paragraph about some of the projects I have completed.</p>
            </header>
            <CardList />
        </div>
    )
}

export default Projects;
