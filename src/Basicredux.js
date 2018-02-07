import React from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'

import { store } from './store'
import { EAT_FOOD } from './actions'

const Main = (props) => <div>Hello</div>

const mapState = (state) => {
    return {
        food: state.foods
    }
}

const mapDispatch = (dispatch) => {
    return {
        eatFood: (food) => dispatch({
            type: 'EA_FOOD',
            food
        })
    }
}

const App = connect(mapState,
    mapDispatch)(Main)

render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
)
