import React, {useState, useEffect} from 'react';
import './BigCup.scss';

const BigCup = ({ liters, amount }) => {


const [percent, setPercent] = useState('')
const [visibility, setVisibility] = useState('hidden')




    return (
        <div className="BigCup">
            <div className="remained">
                <span id='liters'>{liters}L</span>
                <small>Remaind</small>
            </div>
            <div class="precentage" id="precentage" style={{visibility: visibility}}>
                {percent}
            </div>
        </div>
    );
}

export default BigCup;
