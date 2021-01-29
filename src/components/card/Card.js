import React, { useState } from 'react';

import './Card.css';

function Card({ title, imgUrl, description, ghLink }) {

    const [isFocused, setIsFocused] = useState(false);

    const setFocus = () => {
        setIsFocused(!isFocused);
    }

    return (
        <a className="card" href={ghLink} target="_blank">
            <div onMouseOver={() => setFocus()} onMouseOut={() => setFocus()}>
                <div className="img-container">

                    <img className={`card-img ${isFocused ? "card-img-zoom" : ""}`} src={imgUrl} />

                </div>
                <div className="card-text-content">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-description">{description}</p>
                </div>
                {/*             <hr style={{ backgroundColor: "black", zIndex: 100, width: 200 }} /> */}
            </div></a>
    )
}

export default Card;