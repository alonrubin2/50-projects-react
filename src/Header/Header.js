import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext'



import './Header.scss';

const Header = () => {

    const history = useHistory();
    const { user } = useContext(UserContext);

    return (
        <div className="Header">
           <div className="username"> hello {user}</div>
           <button onClick={() => history.push('/landing')} className="header-btn">back to playgroud</button>
        </div>
    );
}

export default Header;
