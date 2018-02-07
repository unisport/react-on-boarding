import {
    combineReducers
} from 'redux'

const foods = (state = [], action) => state

const rootReducer = combineReducers({
    foods
})

export default rootReducer
