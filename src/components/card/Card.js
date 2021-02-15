import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaJava } from 'react-icons/fa';
import { DiJavascript1, DiPython } from 'react-icons/di';

import cardStyles from './Card.module.css';


function Card({ title, imgUrl, description, projectURL, mainLanguage }) {

  const iconMap = {
    'python': <DiPython />,
    'javaScript': <DiJavascript1 />,
    'java': <FaJava />,
  }

  const [isFocused, setIsFocused] = useState(false);

  const setFocus = () => {
    setIsFocused(!isFocused);
  }

  return (
    <Link
      to={projectURL}
      onMouseOver={() => setFocus()}
      onMouseOut={() => setFocus()}
      className={`${cardStyles.card} ${cardStyles.fadeInUp} ${isFocused ? `${cardStyles.focused}` : ``}`}
    >
      <div className={`${cardStyles.imgContainer}`}>
        <img src={imgUrl} alt='' className={`${cardStyles.img}`} />
        <div className={`${cardStyles.icon}`}>
          {iconMap[mainLanguage]}
        </div>
      </div>
      <div className={`${cardStyles.textContainer}`}>
        <h3 className={`${cardStyles.title}`}>
          {title}
        </h3>
        <p className={`${cardStyles.description}`}>
          {description}
        </p>
      </div>
    </Link>
  )
}

export default Card;
