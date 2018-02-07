import {
    createStore
} from 'redux'

import rootReducer from './reducers'

const initialState = {
    foods: []
}

export const store = createStore(rootReducer,
    initialState)
