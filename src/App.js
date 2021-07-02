import './App.scss';
import { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Switch,
  Route,
} from 'react-router-dom';
import ExpandingCrads from './ExpandingCards/ExpandingCrads';
import Landing from './Landing/Landing';
import DrinkWater from './DrinkWater/DrinkWater';
import Movies from './Movies/Movies';

function App() {



  const history = useHistory();

  useEffect(() => {
    history.push('/landing');
  }, [history]);

  return (
    <div className="App">


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
        <Route path="/">
          <Landing />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
