import React, { useState } from 'react';
import './Card.scss';

const Card = ({ src, title }) => {

    const [isActive, setIsActive] = useState(true);

    function hadleClick() {
        setIsActive(!isActive);
    }

    return (
        <div className={isActive ? "Card" : "Card active"} onClick={hadleClick}>
            <div className="img" style={{backgroundImage: `url(${src})`}}>
                <h3 className="title">{title}</h3>
            </div>
        </div>
    );
}

export default Card;
