import './App.scss';
import { useEffect, useState, useContext } from 'react';
import { UserContext } from './contexts/UserContext';
import { useHistory } from 'react-router-dom';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Login from './Login/Login'
import ExpandingCrads from './ExpandingCards/ExpandingCrads';
import Landing from './Landing/Landing';
import DrinkWater from './DrinkWater/DrinkWater';
import Movies from './Movies/Movies';
import Header from './Header/Header';

function App() {

  const [user, setUser] = useState({});


  const history = useHistory();

  useEffect(() => {
    history.push('/login');
  }, [history]);

  function isLogged() {
    return Boolean(Object.keys(user).length);
  }

  return (

    <UserContext.Provider value={{ user: user, setUser }}>

      <div className="App">
        {isLogged() && <Header />}
        <Switch>
          <Route path="/expandingcards">
            <ExpandingCrads />
          </Route>
          <Route path="/drinkwater">
            <DrinkWater />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>

      </div>

    </UserContext.Provider>
  );
}

export default App;
