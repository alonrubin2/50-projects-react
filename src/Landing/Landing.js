import React from 'react';
import { useHistory } from 'react-router-dom';
import './Landing.scss';

const Landing = () => {

    const history = useHistory();
    

    return (
        <div className="Landing">
            <button onClick={(e) => history.push("/expandingcards")}>
                Expanding Cards
            </button>
        </div>
    );
}

export default Landing;
