import counterReducer from './counter'
import loggedReducer from './login'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    login: loggedReducer
})