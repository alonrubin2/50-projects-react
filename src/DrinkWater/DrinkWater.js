import React, { useState, useEffect } from 'react';
import BigCup from './BigCup/BigCup';
import './DrinkWater.scss';
import SmallCup from './SmallCup/SmallCup';

const DrinkWater = () => {

    const [liters, setLiters] = useState('');
    const [value, setValue] = useState('')

    const cup = { amount: '250 ml' };
    const cups = [];

    for (let i = 0; i < (liters * 4); i++) {
        cups.push(cup);
    }



    function handleSubmit(event) {
        event.preventDefault();
        setLiters(value);
        setValue('');
    }

    return (
        <div className='DrinkWater'>

            <h1>Drink Water</h1>
            <h3>Goal: {liters} Liters</h3>

            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="how do you wanna drink?"
                    required />
            </form>

            <BigCup liters={liters} amount={cups.length} />

            {/* 
            need to make small cups functionality and animation
            for every cup/ probably gonna have to send cuntion as prop
            */}
            <h3>How Much Did You Already Drink?</h3>
            <div className="small-cup-container">
                {cups.map((cup) => {
                    return <SmallCup />
                })}
            </div>

        </div>
    );
}

export default DrinkWater;
