import React, { useState } from 'react';
import { FaJava } from 'react-icons/fa';
import { DiJavascript1, DiPython } from 'react-icons/di';

import './Card.css';

function Card({ title, imgUrl, description, ghLink, mainLanguage }) {

    const iconMap = {
        "python": <DiPython />,
        "javaScript": <DiJavascript1 />,
        "java": <FaJava />,
    }

    const [isFocused, setIsFocused] = useState(false);

    const setFocus = () => {
        setIsFocused(!isFocused);
    }

    return (
        <a href={ghLink} target="_blank" id="card-link" >
            <div className={`card fade-in-up ${isFocused ? "card-focused" : ""}`}
                onMouseOver={() => setFocus()}
                onMouseOut={() => setFocus()}
            >
                <div className="card-content">
                    <div className="card-img-container">
                        <img className={`card-img ${isFocused ? "card-img-zoom" : ""}`} src={imgUrl} />
                        <div className="card-icon">{iconMap[mainLanguage]}</div>
                    </div>
                    <div className="card-text-content">
                        <h3 className="card-title">{title}</h3>
                        <p className="card-description">{description}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default Card;
