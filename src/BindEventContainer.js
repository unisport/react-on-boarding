/**
 *
 */
import { render } from 'react-dom'
import React from 'react'

class BindEventContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }

        this.incrementCount = this.incrementCount.bind(this)
        this.decrementCount = this.decrementCount.bind(this)
    }

    incrementCount(e) {
        let count = this.state.counter
        this.setState({counter: count + 1})
    }

    decrementCount(e) {
        let count = this.state.counter
        this.setState({counter: count - 1})
    }

    render() {
        return <div>How many kittens do you have {this.state.counter}?
                <button onClick={this.incrementCount}>+</button>
                <button onClick={this.decrementCount}>-</button>
            </div>
    }
}

render(
    <BindEventContainer />,
    document.getElementById('root')
)
