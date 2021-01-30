import Card from '../card/Card';
import cards from '../card/cardData';
import './Projects.css';

function Projects() {
    return (
        <div className="card-container">
            {cards.map((card) => {
                return <Card
                    title={card.title}
                    imgUrl={card.screenshots[0].url}
                    description={card.description}
                    ghLink={card.ghLink}
                    technologies={card.technologies}
                />;
            })}
        </div>
    )
}

export default Projects;
