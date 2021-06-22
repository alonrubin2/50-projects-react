import React from 'react';


import Card from './Card/Card';
import './ExpandingCrads.scss';

const ExpandingCrads = () => {

    // this can also be done with a fetch(), but for now i'm using mock data
    const images = [
        { title: "Slopes", source: '../assets/expanding-cards-imgs/slope.jpg' },
        { title: "Forests", source: '../assets/expanding-cards-imgs/forest.jpg' },
        { title: "Desserts", source: '../assets/expanding-cards-imgs/dessertpano.jpg' },
        { title: "Desserts and seas", source: '../assets/expanding-cards-imgs/dessertandsea.jpg' },
        { title: "Costal Towns", source: '../assets/expanding-cards-imgs/coastaltown.jpg' },
    ]



    return (
        <div className="ExpandingCards">
            {images.map((image, index) => {
                return <Card
                    className="card"
                    title={image.title}
                    src={image.source}
                />
            })}
        </div>
    );
}

export default ExpandingCrads;
