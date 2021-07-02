import React, { useState } from 'react';
import './SmallCup.scss';

const SmallCup = ({ key, amount }) => {


    const [isFull, setIsFull] = useState(true)
    const [fullClass, setFullClass] = useState('')

    function fillCup() {
        setIsFull(!isFull);
        if (isFull) {
            setFullClass('full');
            return;
        }
        setFullClass('');
    }


    return (
        <div onClick={fillCup} key={key} className={`cup-small ${fullClass}`}>
            <div>{amount}</div>
        </div>
    );
}

export default SmallCup;
