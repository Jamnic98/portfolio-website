import Card from './Card';
import cardListStyles from './CardList.module.css';

const CardList = (props) => {
    return (
        <div className={`${cardListStyles.list}`}>
            {props.projects.map((project, index) => {
                return (
                    <Card
                        key={index}
                        title={project.title}
                        imgUrl={project.screenshots[0]}
                        description={project.shortDescription}
                        projectURL={project.url}
                        mainLanguage={project.mainLanguage}
                    />
                );
            })}
        </div>
    );
}

export default CardList;
