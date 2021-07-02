import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SpecialButton.scss';

const SpecialButton = ({ title, url }) => {

    const history = useHistory();

    const [circle, setCircle] = useState('');
    const [isShown, setIsShown] = useState(false);
    const [left, setLeft] = useState('');
    const [top, setTop] = useState('');

    function animation(event) {
        const x = event.clientX;
        const y = event.clientY;
        const buttonTop = event.target.offsetTop;
        const buttonLeft = event.target.offsetLeft;
        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        setLeft(xInside);
        setTop(yInside);
        setIsShown(true)
        setTimeout(() => setIsShown(false), 400);
    }

    function navigate(link) {
        setTimeout(() => history.push(link), 500)
    }
    return (
        <button className='ripple' onClick={(e) => {
            animation(e);
            navigate(url);
        }}>
            {isShown && <span className="circle" style={{ left: left + 'px', top: top + 'px' }}></span>}
            {title}
        </button>
    );
}






export default SpecialButton;
