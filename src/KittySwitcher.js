/**
 *
 */
import { render } from 'react-dom'
import React, { Component } from 'react'

import KittyComp from './components/KittyComp'

class KittySwitcher extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: props.data,
            randKitty: Math.floor(Math.random() * props.data.length)
        }
    }

    render() {
        return <div>
                <KittyComp img={ this.state.data[this.state.randKitty] } />
            </div>
    }
}

const kitties = [
    'https://media.giphy.com/media/LMn7PRCVDcnvO/giphy.gif',
    'https://media3.giphy.com/media/IMDSOJvLn9RaU/giphy.gif'
];

render(
    <KittySwitcher data={kitties} />,
    document.getElementById('root')
)
