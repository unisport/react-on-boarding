## React by Example

* Stateless app
* Stateless app with properties
* Container and component app
* Event Binding
* Accessing DOM nodes
* Async requests
* Passing campaign data to the component

### Simple react app

The simplest version of a React app is simply a function that returns HTML markup, the only requirement is that React has been imported

**Example**
```javascript
import React from 'react'

const App = () => (
    <div>Hello Kitty!</div>
)
```

Properties can be passed to components simply by assigning them as you would with HTML tag attributes

**Example**
```javascript
const App = ({color, name}) => (
    <div>Hello {name}, you are {color}!</div>
)

<App name="Pussy" color="white" />
```
The order in which they are passed is not important, they are passed by name and not by order

### Containers and Components

We follow the pattern of Containers and Components where it makes sence. Containers should represent your app state and make use of the component lifecycle to handle your app logic, GET data from the backend and POST data to the backend whereas components more jibber jabber to come

An example of a Container that imports a Component

**Example**
```javascript
import Kitty from './components/Kitty'

class Container extends React.Component {
    render() {
        return <div>
                <Kitty />
            </div>
    }
}
```
An example of a Container that has state and imports a Component to display the data

**Example**
```javascript
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

// Kitty Component
const KittyComp = ({img}) => (
    <img src={img} />
)
```
Here the Container has a property called data containing the kitty images. Inside the Component we make use of the constructor to set the application state as well as pick a random image path and pass it to the stateless KittyComponent

### Event Binding

When binding an event to eg a button inside a component we usually follow this pattern

**Example**
```javascript
...
    constructor(props) {
        super(props)

        this.incrementCount = this.incrementCount.bind(this)
        this.decrementCount = this.decrementCount.bind(this)
    }

    incrementCount(e) {
        // Magic happens
    }

    decrementCount(e) {
        // Magic happens
    }
    ...
// Then the eventhandler is added like this
<button onClick={this.incrementCount}>+</button>
```
In the above example the element that was clicked can be accessed using the SyntheticMouseEvent passed to the event handler like this e.target

### Accessing DOM nodes

If required accessing DOM nodes should be done using React's ref Callback Attribute, once the ref has been setup the DOM node can be manipulated

**Example**
```javascript
...
    componentWillUpdate(nextProps, nextState) {
        if (nextState.isHappy === true) {
            this.elm.innerText = 'Happy Kitty'
        } else {
            this.elm.innerText = 'Sad Kitty'
        }
    }

    render() {
        return <div>Is it on? {this.state.isHappy ? 'Yes!' : 'No!'}
                <div ref={(elm) => {this.elm = elm}}>Sad Kitty</div>
                <button onClick={this.toggle}>Toggle</button>
            </div>
    }
```
Once the component is mounted the callback function will be executed and the reference is ready to be used.
