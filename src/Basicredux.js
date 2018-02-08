import React from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'

import { store } from './store'
import { EAT_FOOD } from './actions'

const Main = (props) => {
    const randomFood = () => {
        let foods = ['hotdog', 'burger', 'slider', 'carrot']
        return foods[Math.floor(Math.random() * foods.length)]
    }
    let food = randomFood()

    const clickHandler = (food) => {
        props.eatFood(food)
    }

    return <div>Hello, I am munching on <ul>{ props.foods.map((food, i) =>
                <li key={ i }>{ food }</li>)}</ul>
                <button onClick={ clickHandler.bind(null, food) }>Feed me!</button>
            </div>
}

const mapState = (state) => {
    return {
        foods: state.foods
    }
}

const mapDispatch = (dispatch) => {
    return {
        eatFood: (food) => dispatch({
            type: 'EAT_FOOD',
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
