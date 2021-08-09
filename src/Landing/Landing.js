import React, { useContext } from 'react';
import './Landing.scss';
import SpecialButton from './SpecialButton/SpecialButton';

const Landing = () => {

    const pages = [
        { title: 'Expanding Cards', url: '/expandingcards' },
        { title: 'Drink Water', url: '/drinkwater' },
        { title: 'Movie Search', url: '/movies' },
        { title: 'Click Me!', url: '#' },

    ];

    return (
        <div className="Landing">
            {pages.map((page) => {
                return <SpecialButton title={page.title} url={page.url} />
            })}

        </div>
    );
}

export default Landing;
