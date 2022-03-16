// import { createStore } from 'redux';
// import reducers from '../reducer/index';
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';


// const store = createStore(reducers,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = configureStore({
    reducer: {
        todos: todoReducer
    }
})

export default store;