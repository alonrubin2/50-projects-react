import React, { useState } from 'react';
import './SmallCup.scss';

const SmallCup = ({ cupKey, amount, fullGlass, fillCup }) => {


    const [isFull, setIsFull] = useState(true)
    const [fullClass, setFullClass] = useState('')

    function getCupIndex(k) {
        fillCup(k);
    }


    return (
        <div onClick={() => getCupIndex(cupKey)}
             key={cupKey} className={`cup-small ${fullGlass}`}>
            <div>{amount}</div>
        </div>
    );
}

export default SmallCup;
