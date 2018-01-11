/**
 *
 *
 */
import { render } from 'react-dom'
import React from 'react'

class DOMContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isHappy: false
        }

        this.toggle = this.toggle.bind(this)
    }

    toggle(e) {
        let ih = this.state.isHappy
        if (ih === false) {
            this.setState({isHappy: true})
        } else {
            this.setState({isHappy: false})
        }
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextState.isHappy === true) {
            this.elm.innerText = 'Happy Kitty'
        } else {
            this.elm.innerText = 'Sad Kitty'
        }
    }

    render() {
        return <div>Is it happy? {this.state.isHappy ? 'Yes!' : 'No!'}
                <div ref={(elm) => {this.elm = elm}}>Sad Kitty</div>
                <button onClick={this.toggle}>Toggle</button>
            </div>
    }
}

render(
    <DOMContainer />,
    document.getElementById('root')
)
