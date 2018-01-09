/**
 * TODO: Describe order of imports
 */
import { render } from 'react-dom'
import React from 'react'

/**
 * A stateless component at it's simplest is just a function
 * returning HTML, just remember to import React otherwise
 * it will not work. This component takes a single property called name
 * and prints it on the screen. You can pass multiple properties by name
 * the order isn't important
 */
const App = ({color, name}) => (
    <div>Hello {name}, you are {color}!</div>
)

render(
    <App name="Pussy" color="white" />,
    document.getElementById('root')
);
