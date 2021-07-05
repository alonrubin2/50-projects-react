import React, { useState, useEffect } from 'react';
import BigCup from './BigCup/BigCup';
import './DrinkWater.scss';
import SmallCup from './SmallCup/SmallCup';

const DrinkWater = () => {

    const [liters, setLiters] = useState('');
    const [value, setValue] = useState('');
    // const [isFull, setIsFull] = useState(true);
    const [fullClass, setFullClass] = useState('');
    // const [cups, setCups] = useState([]);


    // need to figure it out!


    // useEffect(() => {
    //     renderCups();
    // }, []);

    // function renderCups() {

    //     for (let i = 0; i < (liters * 4); i++) {
    //         const cup = { amount: '250 ml', isFull: false };
    //         setCups([...cups, cup]);
    //     }
    // }

    const cup = { amount: '250 ml', isFull: false };
    let cups = [];

    for (let i = 0; i < (liters * 4); i++) {
        cups.push(cup);
    }

    console.log(cups)

    function handleSubmit(event) {
        event.preventDefault();
        if (value > 12) {
            alert("We Don't Reccomend You Drink This Amount Of Water")
            return;
        }
        else if (value <= 1) {
            alert("We Don't Reccomend You Drink This Amount Of Water")
            return;
        }
        setLiters(value);
        setValue('');
        // renderCups();
    }

    // function fillCup(cupIndex) {
    //     // setIsFull(!isFull);
    //     let array = [];
    //     if (fullClass === '') {
    //         for (let i = cupIndex; i > 0; i--) {
    //             // if ()
    //             array.push(cups[cupIndex].isFull = true)
    //             return;
    //         }
    //     }
    //     cups[cupIndex].isFull = false;
    // }

    function fillCup(cupIndex) {
        if (fullClass === '') {
            setFullClass('full')
            return;
        }
        else {
            setFullClass('');
        }
    }



    return (
        <div className='DrinkWater'>
            <div className="headlines">
                <h1>Drink Water</h1>
                <h3>Goal: {liters} Liters</h3>
            </div>
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
                {cups.map((cup, index) => {

                    return <SmallCup fillCup={fillCup} fullGlass={fullClass} amount={cup.amount} cupKey={index} />
                })}
            </div>

        </div>
    );
}

export default DrinkWater;
