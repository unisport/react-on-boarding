import {
    combineReducers
} from 'redux'

const foods = (state = [], action) => {
    console.log(action)
    switch(action.type) {
        case 'EAT_FOOD':
            return [
                ...state,
                action.food
            ]
        default:
            return state
    }
}

const rootReducer = combineReducers({
    foods
})

export default rootReducer
