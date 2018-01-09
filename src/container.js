/**
 *
 */
import { render } from 'react-dom'
import React from 'react'

import Kitty from './components/Kitty'

class Container extends React.Component {
    render() {
        return <div>
                <Kitty />
            </div>
    }
}

render(
    <Container />,
    document.getElementById('root')
)
