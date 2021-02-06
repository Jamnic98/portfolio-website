import Card from './Card';
import cards from './cardData';
import './CardList.css';

const CardList = () => {
    return (
        <div className="card-list">
            {cards.map((card) => {
                return (
                    <Card
                        title={card.title}
                        imgUrl={card.screenshots[0].url}
                        description={card.description}
                        ghLink={card.ghLink}
                        mainLanguage={card.mainLanguage}
                    />
                );
            })}
        </div>
    );
}

export default CardList;
