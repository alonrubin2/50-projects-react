import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.scss';

const Login = () => {

    const history = useHistory();

    const [isChecked, setIsChecked] = useState(false);
    const [isClicked, setIsClicked] = useState(true);
    const [hasValue, setHasValue] = useState(false);
    const [value, setValue] = useState('');


    // need to figure out how to update correctly, it has a delay of 1 char
    const checkValue = () => {
        if (value.length > 5) {
            setHasValue(true);
        }
        if (value.length < 5) {
            setHasValue(false);
        }
    }




    return (
        <div className="Login">
            <h1>Please Login</h1>

            <form className="form">

                <div className="form-control">
                    <input onClick={() => setIsClicked(!isClicked)}
                        onChange={(e) => {
                            setValue(e.target.value);
                            checkValue();
                        }}
                        type="text" required />
                    {isClicked ?
                        <label for="">Username</label> :
                        <label for="" className="span">Username</label>}



                </div>

                <div className="checkbox-control">
                    <label for="">Are You Over 18?</label>
                    <input onChange={() => setIsChecked(!isChecked)} className="checkbox" type="checkbox" required />

                </div>
                {isChecked && <div className="just-kidding">Just Kidding, It's All PG-13 ;)</div>}

                {
                    hasValue && isChecked ?
                        <button onClick={() => history.push('/landing')} className="btn">Login</button>
                        : <button className="btn" disabled>Login</button>
                }


            </form>
        </div>
    );
}

export default Login;
