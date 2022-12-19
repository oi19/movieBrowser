import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import SearchScreenReducer from '../redux/reducers/SearchScreenReducer';
import MovieScreenReducer from './reducers/MovieScreenReducer';


// every reducers in the project
const reducers = combineReducers({
    SearchScreen: SearchScreenReducer,
    MovieScreen: MovieScreenReducer
})

// middleware thunk => helps to handle  asynchronous actions as redux is only familiar
//with synchronous functions   
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))





export { store }