import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {increment} from './actions'
// import 
// import { createStore } from 'react-redux'

function App() {

  const counter = useSelector(state => state.counter)
  const logged = useSelector(state => state.login)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>You currently have {counter} can of beans!</h1>
        <div>

        <button onClick={() => dispatch(increment())}>Buy Beans</button>
        <button>Eat Beans</button>

        </div>

        {logged === true ? <h3>This should not appear when not logged in</h3> : ''}
      </header>
    </div>
  );
}

export default App;
