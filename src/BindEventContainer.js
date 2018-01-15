/**
 *
 */
import { render } from 'react-dom'
import React from 'react'

const Button = () => <button>Click</button>

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

    handleClick(e) {
        console.log('hello')
    }
    // If the arrow function is used the following can be done but it's less
    // readable for newcomers unfamiliar with this syntax
    // decrementCount = () => {
    // }
    // If you need to pass an extra parameter to the function it can be done like this
    // <button onClick={this.incrementCount.bind(this, myParam)}></button> and in this
    // case the binding isn't done in the constructor
    render() {
        return <div>How many kittens do you have {this.state.counter}?
                <button onClick={this.incrementCount}>+</button>
                <button onClick={this.decrementCount}>-</button>
                <div onClick={this.handleClick}>
                    <Button />
                </div>
            </div>
    }
}

render(
    <BindEventContainer />,
    document.getElementById('root')
)
