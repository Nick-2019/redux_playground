import React from 'react';
import logo from './logo.svg';
import HEINZ from './HEINZ.jpg'
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement, login} from './actions'
// import 
// import { createStore } from 'react-redux'

function App() {

  const counter = useSelector(state => state.counter)
  const logged = useSelector(state => state.login)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={HEINZ} className="App-logo" alt="logo" />
        <h1>You currently have {counter} can{counter == 1 ? '' : 's'} of beans!</h1>
        <div>
        <button onClick={() => dispatch(increment(10))}>Buy Beans at CostCo</button>
        <button onClick={() => dispatch(increment(1))}>Buy Beans</button>
        <button onClick={() => dispatch(decrement(10))}>Have a bean BBQ</button>
        <button onClick={() => dispatch(decrement(1))}>Eat Beans</button>
        


        </div>
        {logged === false ? <button onClick={() => dispatch(login())} >Login</button> : ''}

        {logged === true ? <h3>The beans are here. The beans are there. The beans are you. The beans are me. Succumb to the bean. Become the bean. Heinz baked beans</h3> : ''}
      </header>
    </div>
  );
}

export default App;
