/**
 * TODO: Describe order of imports
 */
import { render } from 'react-dom'
import React from 'react'

/**
 * A stateless component at it's simplest is just a function
 * returning HTML, just remember to import React otherwise
 * it will not work
 */
const App = () => (
    <div>Hello Kitty!</div>
)

render(
    <App />,
    document.getElementById('root')
);
