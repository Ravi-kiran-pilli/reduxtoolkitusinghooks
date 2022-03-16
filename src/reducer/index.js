import { combineReducers } from 'redux'
import CounterReducer from './CounterReducer'
import ObjectReducer from './ObjectReducer'

const reducers = combineReducers({
    objects: ObjectReducer,
    counter: CounterReducer
})
export default reducers;