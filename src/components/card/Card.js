import React, { useState, useEffect } from 'react';
import { FaJava } from 'react-icons/fa';
import { DiJavascript1, DiPython } from 'react-icons/di';

import Tilt from 'react-tilt';

import './Card.css';


function Card({ title, imgUrl, description, ghLink, technologies }) {

    const options = {
        reverse: true,  // reverse the tilt direction
        max: 10,     // max tilt rotation (degrees)
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1,      // 2 = 200%, 1.5 = 150%, etc..
        speed: 300,    // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,    // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }

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

    const handleMouseMove = () => {
    }

    const handleMouseOver = () => {
        setFocus()
    }

    const handleMouseOut = () => {
        setFocus()
    }

    return (
        <a
            href={ghLink}
            target="_blank"
            onMouseOver={(e) => handleMouseOver(e)}
            onMouseOut={(e) => handleMouseOut(e)}
            className="card"
        >
            <div className="card-img-container">
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