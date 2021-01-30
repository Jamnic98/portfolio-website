import React, { useState } from 'react';
import { FaJava } from 'react-icons/fa';
import { DiJavascript1, DiPython } from 'react-icons/di';

import './Card.css';

function Card({ title, imgUrl, description, ghLink, technologies }) {

    const iconMap = {
        "python": <DiPython />,
        "javaScript": <DiJavascript1 />,
        "java": <FaJava />,
    }

    const [isFocused, setIsFocused] = useState(false);

    const setFocus = () => {
        setIsFocused(!isFocused);
    }

    const setIcons = () => {
        const iconListItems = technologies.map((technology) => {
            return iconMap[technology];
        })
        const iconList = iconListItems.map((iconListItem) => <li className="card-icon">{iconListItem}</li>);
        return iconList;
    }

    return (
        <a className="card"
            href={ghLink}
            target="_blank"
            onMouseOver={() => setFocus()}
            onMouseOut={() => setFocus()}
        >
            <div className="img-container">
                <div className="color-overlay">
                    <img className={`card-img ${isFocused ? "card-img-zoom" : ""}`} src={imgUrl} />
                </div>
            </div>
            <div className="card-text-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                <ul className="card-icon-list">{setIcons()}</ul>
            </div>
        </a>
    )
}

export default Card;